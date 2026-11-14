/*
 * CS 408 Data Structures - Sorting Lab
 * Build: cc -std=c11 -Wall -Wextra -Wpedantic -O2 sorting_lab.c -o sorting_lab
 * Run:   ./sorting_lab
 *
 * Records carry their original positions so stability can be tested,
 * rather than guessed from the final key sequence.
 */
#include <assert.h>
#include <limits.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int key;
    int original;
} Record;

typedef void (*SortFn)(Record *, size_t);

static bool less_key(Record a, Record b) { return a.key < b.key; }
static void swap_record(Record *a, Record *b) {
    Record t = *a; *a = *b; *b = t;
}

static void insertion_sort(Record *a, size_t n) {
    for (size_t i = 1; i < n; ++i) {
        Record cur = a[i];
        size_t j = i;
        while (j > 0 && a[j - 1].key > cur.key) {
            a[j] = a[j - 1];
            --j;
        }
        a[j] = cur;
    }
}

static void shell_sort(Record *a, size_t n) {
    for (size_t gap = n / 2; gap > 0; gap /= 2) {
        for (size_t i = gap; i < n; ++i) {
            Record cur = a[i];
            size_t j = i;
            while (j >= gap && a[j - gap].key > cur.key) {
                a[j] = a[j - gap];
                j -= gap;
            }
            a[j] = cur;
        }
    }
}

static void bubble_sort(Record *a, size_t n) {
    for (size_t end = n; end > 1; --end) {
        bool changed = false;
        for (size_t i = 1; i < end; ++i) {
            if (a[i - 1].key > a[i].key) {
                swap_record(&a[i - 1], &a[i]);
                changed = true;
            }
        }
        if (!changed) break;
    }
}

static size_t partition(Record *a, size_t lo, size_t hi) {
    Record pivot = a[hi];
    size_t boundary = lo;
    for (size_t j = lo; j < hi; ++j) {
        if (a[j].key <= pivot.key) {
            swap_record(&a[boundary], &a[j]);
            ++boundary;
        }
    }
    swap_record(&a[boundary], &a[hi]);
    return boundary;
}

static void quick_sort_range(Record *a, size_t lo, size_t hi) {
    if (lo >= hi) return;
    size_t p = partition(a, lo, hi);
    if (p > lo) quick_sort_range(a, lo, p - 1);
    if (p < hi) quick_sort_range(a, p + 1, hi);
}

static void quick_sort(Record *a, size_t n) {
    if (n > 1) quick_sort_range(a, 0, n - 1);
}

static void selection_sort(Record *a, size_t n) {
    for (size_t i = 0; i < n; ++i) {
        size_t min_i = i;
        for (size_t j = i + 1; j < n; ++j)
            if (less_key(a[j], a[min_i])) min_i = j;
        if (min_i != i) swap_record(&a[i], &a[min_i]);
    }
}

static void sift_down(Record *a, size_t root, size_t count) {
    for (;;) {
        size_t child = root * 2 + 1;
        if (child >= count) return;
        if (child + 1 < count && a[child].key < a[child + 1].key)
            ++child;
        if (a[root].key >= a[child].key) return;
        swap_record(&a[root], &a[child]);
        root = child;
    }
}

static void heap_sort(Record *a, size_t n) {
    for (size_t i = n / 2; i > 0; --i) sift_down(a, i - 1, n);
    for (size_t end = n; end > 1; --end) {
        swap_record(&a[0], &a[end - 1]);
        sift_down(a, 0, end - 1);
    }
}

static void merge(Record *a, Record *tmp, size_t lo,
                  size_t mid, size_t hi) {
    size_t i = lo, j = mid, k = lo;
    while (i < mid && j < hi)
        tmp[k++] = (a[i].key <= a[j].key) ? a[i++] : a[j++];
    while (i < mid) tmp[k++] = a[i++];
    while (j < hi) tmp[k++] = a[j++];
    for (k = lo; k < hi; ++k) a[k] = tmp[k];
}

static void merge_sort_range(Record *a, Record *tmp, size_t lo, size_t hi) {
    if (hi - lo < 2) return;
    size_t mid = lo + (hi - lo) / 2;
    merge_sort_range(a, tmp, lo, mid);
    merge_sort_range(a, tmp, mid, hi);
    merge(a, tmp, lo, mid, hi);
}

static void merge_sort(Record *a, size_t n) {
    if (n < 2) return;
    Record *tmp = malloc(n * sizeof(*tmp));
    if (!tmp) {
        fputs("merge_sort: allocation failed\n", stderr);
        exit(EXIT_FAILURE);
    }
    merge_sort_range(a, tmp, 0, n);
    free(tmp);
}

/* LSD radix sort: this teaching implementation accepts nonnegative keys only. */
static void radix_sort(Record *a, size_t n) {
    int max_key = 0;
    for (size_t i = 0; i < n; ++i) {
        if (a[i].key < 0) {
            fputs("radix_sort: negative key is unsupported\n", stderr);
            exit(EXIT_FAILURE);
        }
        if (a[i].key > max_key) max_key = a[i].key;
    }
    if (n < 2) return;

    Record *out = malloc(n * sizeof(*out));
    if (!out) {
        fputs("radix_sort: allocation failed\n", stderr);
        exit(EXIT_FAILURE);
    }

    for (long long exp = 1; max_key / exp > 0; exp *= 10) {
        size_t count[10] = {0};
        for (size_t i = 0; i < n; ++i)
            ++count[(a[i].key / exp) % 10];
        for (size_t d = 1; d < 10; ++d) count[d] += count[d - 1];
        for (size_t i = n; i > 0; --i) {
            size_t d = (size_t)((a[i - 1].key / exp) % 10);
            out[--count[d]] = a[i - 1];
        }
        for (size_t i = 0; i < n; ++i) a[i] = out[i];
        if (exp > INT_MAX / 10) break;
    }
    free(out);
}

static bool is_sorted(const Record *a, size_t n) {
    for (size_t i = 1; i < n; ++i)
        if (a[i - 1].key > a[i].key) return false;
    return true;
}

static bool is_stable(const Record *a, size_t n) {
    for (size_t i = 1; i < n; ++i)
        if (a[i - 1].key == a[i].key &&
            a[i - 1].original > a[i].original) return false;
    return true;
}

static void run_case(const char *name, SortFn sort, bool stable,
                     const int *values, size_t n) {
    Record *a = n ? malloc(n * sizeof(*a)) : NULL;
    assert(n == 0 || a != NULL);
    for (size_t i = 0; i < n; ++i) {
        a[i].key = values[i];
        a[i].original = (int)i;
    }
    sort(a, n);
    assert(is_sorted(a, n));
    if (stable) assert(is_stable(a, n));
    free(a);
    printf("[PASS] %-18s n=%zu%s\n", name, n,
           stable ? " (stable)" : "");
}

int main(void) {
    static const int empty[] = {0};
    static const int singleton[] = {7};
    static const int ascending[] = {-5, -1, 0, 2, 4, 9};
    static const int descending[] = {9, 4, 2, 0, -1, -5};
    static const int duplicates[] = {4, 2, 4, 1, 2, 4, 1, 2};
    static const int equal[] = {3, 3, 3, 3, 3};
    static const int nonnegative[] = {170, 45, 75, 90, 802, 24, 2, 66};

    struct {
        const char *name;
        SortFn fn;
        bool stable;
    } algorithms[] = {
        {"insertion", insertion_sort, true},
        {"shell", shell_sort, false},
        {"bubble", bubble_sort, true},
        {"quick", quick_sort, false},
        {"selection", selection_sort, false},
        {"heap", heap_sort, false},
        {"merge", merge_sort, true},
        {"radix(nonnegative)", radix_sort, true}
    };

    for (size_t i = 0; i < sizeof(algorithms) / sizeof(algorithms[0]); ++i) {
        run_case(algorithms[i].name, algorithms[i].fn, algorithms[i].stable,
                 empty, 0);
        run_case(algorithms[i].name, algorithms[i].fn, algorithms[i].stable,
                 singleton, 1);
        run_case(algorithms[i].name, algorithms[i].fn, algorithms[i].stable,
                 ascending, sizeof(ascending) / sizeof(ascending[0]));
        run_case(algorithms[i].name, algorithms[i].fn, algorithms[i].stable,
                 descending, sizeof(descending) / sizeof(descending[0]));
        run_case(algorithms[i].name, algorithms[i].fn, algorithms[i].stable,
                 duplicates, sizeof(duplicates) / sizeof(duplicates[0]));
        run_case(algorithms[i].name, algorithms[i].fn, algorithms[i].stable,
                 equal, sizeof(equal) / sizeof(equal[0]));
    }
    run_case("radix(nonnegative)", radix_sort, true, nonnegative,
             sizeof(nonnegative) / sizeof(nonnegative[0]));
    puts("All sorting checks passed.");
    return 0;
}

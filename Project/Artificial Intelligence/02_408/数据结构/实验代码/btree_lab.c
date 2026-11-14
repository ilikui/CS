/*
 * CS 408 B-Tree Lab (minimum degree t=2; 2-3-4 tree)
 * Build: cc -std=c11 -Wall -Wextra -Wpedantic -Werror -O2 btree_lab.c -o btree_lab
 * Run:   ./btree_lab
 *
 * Convention: each node has at most 2t-1 keys and at least t-1 keys
 * (except the root); all leaves have equal depth.
 */
#include <assert.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

enum { T = 2, MAX_KEYS = 2 * T - 1, MAX_CHILDREN = 2 * T };

typedef struct BNode {
    int n;
    bool leaf;
    int key[MAX_KEYS];
    struct BNode *child[MAX_CHILDREN];
} BNode;

typedef struct {
    BNode *root;
    size_t size;
} BTree;

static BNode *node_new(bool leaf) {
    BNode *p = calloc(1, sizeof(*p));
    if (!p) {
        fputs("B-tree allocation failed\n", stderr);
        exit(EXIT_FAILURE);
    }
    p->leaf = leaf;
    return p;
}

static bool contains(const BNode *x, int key) {
    if (!x) return false;
    int i = 0;
    while (i < x->n && key > x->key[i]) ++i;
    if (i < x->n && key == x->key[i]) return true;
    return x->leaf ? false : contains(x->child[i], key);
}

static void split_child(BNode *parent, int index) {
    BNode *full = parent->child[index];
    assert(full && full->n == MAX_KEYS && parent->n < MAX_KEYS);
    BNode *right = node_new(full->leaf);
    right->n = T - 1;

    for (int j = 0; j < T - 1; ++j)
        right->key[j] = full->key[j + T];
    if (!full->leaf)
        for (int j = 0; j < T; ++j)
            right->child[j] = full->child[j + T];

    int median = full->key[T - 1];
    full->n = T - 1;
    for (int j = parent->n; j >= index + 1; --j)
        parent->child[j + 1] = parent->child[j];
    parent->child[index + 1] = right;
    for (int j = parent->n - 1; j >= index; --j)
        parent->key[j + 1] = parent->key[j];
    parent->key[index] = median;
    ++parent->n;
}

static void insert_nonfull(BNode *x, int key) {
    int i = x->n - 1;
    if (x->leaf) {
        while (i >= 0 && key < x->key[i]) {
            x->key[i + 1] = x->key[i];
            --i;
        }
        x->key[i + 1] = key;
        ++x->n;
        return;
    }

    while (i >= 0 && key < x->key[i]) --i;
    ++i;
    if (x->child[i]->n == MAX_KEYS) {
        split_child(x, i);
        if (key > x->key[i]) ++i;
    }
    insert_nonfull(x->child[i], key);
}

static bool tree_insert(BTree *tree, int key) {
    if (contains(tree->root, key)) return false;
    if (!tree->root) {
        tree->root = node_new(true);
        tree->root->key[0] = key;
        tree->root->n = 1;
        tree->size = 1;
        return true;
    }
    if (tree->root->n == MAX_KEYS) {
        BNode *new_root = node_new(false);
        new_root->child[0] = tree->root;
        split_child(new_root, 0);
        tree->root = new_root;
    }
    insert_nonfull(tree->root, key);
    ++tree->size;
    return true;
}

static int predecessor(const BNode *x) {
    while (!x->leaf) x = x->child[x->n];
    return x->key[x->n - 1];
}

static int successor(const BNode *x) {
    while (!x->leaf) x = x->child[0];
    return x->key[0];
}

static void borrow_from_previous(BNode *parent, int index) {
    BNode *child = parent->child[index];
    BNode *sibling = parent->child[index - 1];
    for (int i = child->n - 1; i >= 0; --i)
        child->key[i + 1] = child->key[i];
    if (!child->leaf)
        for (int i = child->n; i >= 0; --i)
            child->child[i + 1] = child->child[i];

    child->key[0] = parent->key[index - 1];
    if (!child->leaf) child->child[0] = sibling->child[sibling->n];
    parent->key[index - 1] = sibling->key[sibling->n - 1];
    ++child->n;
    --sibling->n;
}

static void borrow_from_next(BNode *parent, int index) {
    BNode *child = parent->child[index];
    BNode *sibling = parent->child[index + 1];
    child->key[child->n] = parent->key[index];
    if (!child->leaf) child->child[child->n + 1] = sibling->child[0];
    parent->key[index] = sibling->key[0];

    for (int i = 1; i < sibling->n; ++i)
        sibling->key[i - 1] = sibling->key[i];
    if (!sibling->leaf)
        for (int i = 1; i <= sibling->n; ++i)
            sibling->child[i - 1] = sibling->child[i];
    ++child->n;
    --sibling->n;
}

static BNode *merge_children(BNode *parent, int index) {
    BNode *left = parent->child[index];
    BNode *right = parent->child[index + 1];
    int base = left->n;
    left->key[base] = parent->key[index];
    for (int i = 0; i < right->n; ++i)
        left->key[base + 1 + i] = right->key[i];
    if (!left->leaf)
        for (int i = 0; i <= right->n; ++i)
            left->child[base + 1 + i] = right->child[i];
    left->n += right->n + 1;

    for (int i = index + 1; i < parent->n; ++i)
        parent->key[i - 1] = parent->key[i];
    for (int i = index + 2; i <= parent->n; ++i)
        parent->child[i - 1] = parent->child[i];
    --parent->n;
    free(right);
    return left;
}

static void delete_from_node(BNode *x, int key);

static void fill_child(BNode *parent, int index) {
    if (index > 0 && parent->child[index - 1]->n >= T) {
        borrow_from_previous(parent, index);
    } else if (index < parent->n && parent->child[index + 1]->n >= T) {
        borrow_from_next(parent, index);
    } else if (index < parent->n) {
        (void)merge_children(parent, index);
    } else {
        (void)merge_children(parent, index - 1);
    }
}

static void delete_from_node(BNode *x, int key) {
    int index = 0;
    while (index < x->n && key > x->key[index]) ++index;

    if (index < x->n && x->key[index] == key) {
        if (x->leaf) {
            for (int i = index + 1; i < x->n; ++i)
                x->key[i - 1] = x->key[i];
            --x->n;
        } else if (x->child[index]->n >= T) {
            int pred = predecessor(x->child[index]);
            x->key[index] = pred;
            delete_from_node(x->child[index], pred);
        } else if (x->child[index + 1]->n >= T) {
            int succ = successor(x->child[index + 1]);
            x->key[index] = succ;
            delete_from_node(x->child[index + 1], succ);
        } else {
            BNode *merged = merge_children(x, index);
            delete_from_node(merged, key);
        }
        return;
    }

    if (x->leaf) return;
    bool was_last = index == x->n;
    if (x->child[index]->n == T - 1) fill_child(x, index);
    if (was_last && index > x->n)
        delete_from_node(x->child[index - 1], key);
    else
        delete_from_node(x->child[index], key);
}

static bool tree_delete(BTree *tree, int key) {
    if (!contains(tree->root, key)) return false;
    delete_from_node(tree->root, key);
    if (tree->root->n == 0) {
        BNode *old_root = tree->root;
        tree->root = old_root->leaf ? NULL : old_root->child[0];
        free(old_root);
    }
    --tree->size;
    return true;
}

static size_t range_count(const BNode *x, int low, int high) {
    if (!x) return 0;
    size_t count = 0;
    int i = 0;
    for (; i < x->n; ++i) {
        if (!x->leaf) count += range_count(x->child[i], low, high);
        if (x->key[i] >= low && x->key[i] <= high) ++count;
        if (x->key[i] > high) return count;
    }
    if (!x->leaf) count += range_count(x->child[i], low, high);
    return count;
}

static void walk_range(const BNode *x, int low, int high,
                       int *out, size_t *used) {
    if (!x) return;
    for (int i = 0; i < x->n; ++i) {
        if (!x->leaf) walk_range(x->child[i], low, high, out, used);
        if (x->key[i] >= low && x->key[i] <= high)
            out[(*used)++] = x->key[i];
        if (x->key[i] > high) return;
    }
    if (!x->leaf) walk_range(x->child[x->n], low, high, out, used);
}

static bool validate_node(const BNode *x, long long low, long long high,
                          bool is_root, int depth, int *leaf_depth,
                          size_t *count) {
    if (!x || x->n > MAX_KEYS || (!is_root && x->n < T - 1) ||
        (is_root && !x->leaf && x->n == 0)) return false;
    if (x->leaf) {
        if (*leaf_depth == -1) *leaf_depth = depth;
        if (*leaf_depth != depth) return false;
    }
    for (int i = 0; i < x->n; ++i) {
        if (x->key[i] <= low || x->key[i] >= high) return false;
        if (i && x->key[i - 1] >= x->key[i]) return false;
        ++*count;
    }
    if (x->leaf) return true;

    for (int i = 0; i <= x->n; ++i) {
        long long child_low = i == 0 ? low : x->key[i - 1];
        long long child_high = i == x->n ? high : x->key[i];
        if (!validate_node(x->child[i], child_low, child_high, false,
                           depth + 1, leaf_depth, count)) return false;
    }
    return true;
}

static void assert_valid(const BTree *tree) {
    size_t count = 0;
    int leaf_depth = -1;
    if (tree->root)
        assert(validate_node(tree->root, -2147483649LL, 2147483648LL,
                             true, 0, &leaf_depth, &count));
    assert(count == tree->size);
}

static void node_free(BNode *x) {
    if (!x) return;
    if (!x->leaf)
        for (int i = 0; i <= x->n; ++i) node_free(x->child[i]);
    free(x);
}

static void test_btree(void) {
    BTree tree = {NULL, 0};
    const int insert_order[] = {
        18, 3, 25, 7, 1, 30, 12, 20, 5, 9,
        14, 22, 27, 2, 4, 6, 8, 10, 11, 13,
        15, 16, 17, 19, 21, 23, 24, 26, 28, 29
    };
    const size_t n = sizeof(insert_order) / sizeof(insert_order[0]);

    for (size_t i = 0; i < n; ++i) {
        assert(tree_insert(&tree, insert_order[i]));
        assert(!tree_insert(&tree, insert_order[i]));
        assert_valid(&tree);
        for (int key = 1; key <= 30; ++key) {
            bool expected = false;
            for (size_t j = 0; j <= i; ++j)
                if (insert_order[j] == key) expected = true;
            assert(contains(tree.root, key) == expected);
        }
    }

    int values[30];
    size_t used = 0;
    walk_range(tree.root, 8, 19, values, &used);
    assert(used == 12 && range_count(tree.root, 8, 19) == 12);
    for (size_t i = 0; i < used; ++i) assert(values[i] == (int)i + 8);

    /* Alternating ends exercises predecessor/successor replacement,
       borrowing from both sides, merges, and eventual root contraction. */
    for (int step = 0; step < 30; ++step) {
        int key = (step % 2 == 0) ? step / 2 + 1 : 30 - step / 2;
        assert(tree_delete(&tree, key));
        assert(!tree_delete(&tree, key));
        assert(!contains(tree.root, key));
        assert_valid(&tree);
        for (int remain = 1; remain <= 30; ++remain) {
            bool expected = true;
            for (int j = 0; j <= step; ++j) {
                int removed = (j % 2 == 0) ? j / 2 + 1 : 30 - j / 2;
                if (removed == remain) expected = false;
            }
            assert(contains(tree.root, remain) == expected);
        }
    }
    assert(tree.root == NULL && tree.size == 0);
    assert(!tree_delete(&tree, 100));
    puts("[PASS] B-tree: search, split, predecessor/successor, borrow, merge, root shrink, range traversal");
}

int main(void) {
    test_btree();
    puts("All B-tree checks passed.");
    return 0;
}

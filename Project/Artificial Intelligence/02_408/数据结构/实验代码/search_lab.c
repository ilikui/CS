/*
 * CS 408 Search Lab (C11)
 * Build: cc -std=c11 -Wall -Wextra -Wpedantic -O2 search_lab.c -o search_lab
 * Run:   ./search_lab
 */
#include <assert.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

static int sequential_find(const int *a, size_t n, int key) {
    for (size_t i = 0; i < n; ++i) if (a[i] == key) return (int)i;
    return -1;
}

/* Return the first matching index, including when duplicates exist. */
static int binary_find_first(const int *a, size_t n, int key) {
    size_t lo = 0, hi = n;
    while (lo < hi) {
        size_t mid = lo + (hi - lo) / 2;
        if (a[mid] < key) lo = mid + 1;
        else hi = mid;
    }
    return lo < n && a[lo] == key ? (int)lo : -1;
}

typedef struct Node {
    int key;
    struct Node *left, *right;
} Node;

static Node *node_new(int key) {
    Node *p = malloc(sizeof(*p));
    if (!p) { fputs("out of memory\n", stderr); exit(EXIT_FAILURE); }
    *p = (Node){key, NULL, NULL};
    return p;
}

static Node *bst_find(Node *root, int key) {
    while (root && root->key != key)
        root = key < root->key ? root->left : root->right;
    return root;
}

static void bst_insert(Node **root, int key) {
    while (*root) {
        if (key == (*root)->key) return; /* Ignore duplicates in this lab. */
        root = key < (*root)->key ? &(*root)->left : &(*root)->right;
    }
    *root = node_new(key);
}

static void bst_delete(Node **root, int key) {
    if (!*root) return;
    if (key < (*root)->key) { bst_delete(&(*root)->left, key); return; }
    if (key > (*root)->key) { bst_delete(&(*root)->right, key); return; }

    Node *victim = *root;
    if (!victim->left) {
        *root = victim->right;
    } else if (!victim->right) {
        *root = victim->left;
    } else {
        Node **successor_link = &victim->right;
        while ((*successor_link)->left)
            successor_link = &(*successor_link)->left;
        Node *successor = *successor_link;
        victim->key = successor->key;
        *successor_link = successor->right;
        free(successor);
        return;
    }
    free(victim);
}

static bool bst_valid_range(Node *root, long long low, long long high) {
    if (!root) return true;
    if (root->key <= low || root->key >= high) return false;
    return bst_valid_range(root->left, low, root->key) &&
           bst_valid_range(root->right, root->key, high);
}

static void bst_free(Node *root) {
    if (!root) return;
    bst_free(root->left);
    bst_free(root->right);
    free(root);
}

/* AVL: height(NULL)=0, leaf height=1, balance=height(left)-height(right). */
typedef struct Avl {
    int key, height;
    struct Avl *left, *right;
} Avl;

static int avl_height(Avl *p) { return p ? p->height : 0; }
static int max_int(int a, int b) { return a > b ? a : b; }
static void avl_update(Avl *p) {
    p->height = 1 + max_int(avl_height(p->left), avl_height(p->right));
}
static Avl *avl_new(int key) {
    Avl *p = malloc(sizeof(*p));
    if (!p) { fputs("out of memory\n", stderr); exit(EXIT_FAILURE); }
    *p = (Avl){key, 1, NULL, NULL};
    return p;
}
static Avl *rotate_right(Avl *y) {
    Avl *x = y->left, *middle = x->right;
    x->right = y; y->left = middle;
    avl_update(y); avl_update(x);
    return x;
}
static Avl *rotate_left(Avl *x) {
    Avl *y = x->right, *middle = y->left;
    y->left = x; x->right = middle;
    avl_update(x); avl_update(y);
    return y;
}
static Avl *avl_insert(Avl *root, int key) {
    if (!root) return avl_new(key);
    if (key < root->key) root->left = avl_insert(root->left, key);
    else if (key > root->key) root->right = avl_insert(root->right, key);
    else return root;
    avl_update(root);
    int balance = avl_height(root->left) - avl_height(root->right);
    if (balance > 1 && key < root->left->key) return rotate_right(root); /* LL */
    if (balance < -1 && key > root->right->key) return rotate_left(root); /* RR */
    if (balance > 1 && key > root->left->key) { /* LR */
        root->left = rotate_left(root->left);
        return rotate_right(root);
    }
    if (balance < -1 && key < root->right->key) { /* RL */
        root->right = rotate_right(root->right);
        return rotate_left(root);
    }
    return root;
}
static Avl *avl_min_node(Avl *root) {
    while (root && root->left) root = root->left;
    return root;
}

/* Rebalance after either insertion or deletion. Deletion must also handle
 * a heavy child's balance factor == 0 (single rotation, not double). */
static Avl *avl_rebalance(Avl *root) {
    if (!root) return NULL;
    avl_update(root);
    int balance = avl_height(root->left) - avl_height(root->right);
    if (balance > 1) {
        int child_balance = avl_height(root->left->left) -
                            avl_height(root->left->right);
        if (child_balance < 0) root->left = rotate_left(root->left);
        return rotate_right(root);
    }
    if (balance < -1) {
        int child_balance = avl_height(root->right->left) -
                            avl_height(root->right->right);
        if (child_balance > 0) root->right = rotate_right(root->right);
        return rotate_left(root);
    }
    return root;
}

/* Delete one key; each recursive return rechecks every ancestor on the path. */
static Avl *avl_delete(Avl *root, int key) {
    if (!root) return NULL;
    if (key < root->key) {
        root->left = avl_delete(root->left, key);
    } else if (key > root->key) {
        root->right = avl_delete(root->right, key);
    } else {
        if (!root->left || !root->right) {
            Avl *child = root->left ? root->left : root->right;
            free(root);
            return child;
        }
        Avl *successor = avl_min_node(root->right);
        root->key = successor->key;
        root->right = avl_delete(root->right, successor->key);
    }
    return avl_rebalance(root);
}

static bool avl_valid(Avl *root, long long low, long long high, int *height) {
    if (!root) { *height = 0; return true; }
    if (root->key <= low || root->key >= high) return false;
    int lh, rh;
    if (!avl_valid(root->left, low, root->key, &lh) ||
        !avl_valid(root->right, root->key, high, &rh)) return false;
    *height = 1 + max_int(lh, rh);
    return abs(lh - rh) <= 1 && root->height == *height;
}
static Avl *avl_find(Avl *root, int key) {
    while (root && root->key != key)
        root = key < root->key ? root->left : root->right;
    return root;
}
static void avl_free(Avl *root) {
    if (!root) return;
    avl_free(root->left); avl_free(root->right); free(root);
}

/* Linear probing distinguishes never-used EMPTY from tombstone DELETED. */
enum SlotState { EMPTY, OCCUPIED, DELETED };
typedef struct { int key; enum SlotState state; } Slot;
enum { HASH_CAPACITY = 11 };

static size_t hash_index(int key) {
    int r = key % HASH_CAPACITY;
    if (r < 0) r += HASH_CAPACITY;
    return (size_t)r;
}
static bool hash_insert(Slot table[HASH_CAPACITY], int key) {
    size_t first_deleted = HASH_CAPACITY;
    size_t start = hash_index(key);
    for (size_t step = 0; step < HASH_CAPACITY; ++step) {
        size_t i = (start + step) % HASH_CAPACITY;
        if (table[i].state == OCCUPIED && table[i].key == key) return true;
        if (table[i].state == DELETED && first_deleted == HASH_CAPACITY)
            first_deleted = i;
        if (table[i].state == EMPTY) {
            size_t target = first_deleted == HASH_CAPACITY ? i : first_deleted;
            table[target] = (Slot){key, OCCUPIED};
            return true;
        }
    }
    if (first_deleted != HASH_CAPACITY) {
        table[first_deleted] = (Slot){key, OCCUPIED};
        return true;
    }
    return false;
}
static int hash_find(const Slot table[HASH_CAPACITY], int key) {
    size_t start = hash_index(key);
    for (size_t step = 0; step < HASH_CAPACITY; ++step) {
        size_t i = (start + step) % HASH_CAPACITY;
        if (table[i].state == EMPTY) return -1;
        if (table[i].state == OCCUPIED && table[i].key == key) return (int)i;
    }
    return -1;
}
static bool hash_delete(Slot table[HASH_CAPACITY], int key) {
    int i = hash_find(table, key);
    if (i < 0) return false;
    table[i].state = DELETED;
    return true;
}

static void test_linear_search(void) {
    const int a[] = {8, 3, 5, 3, -2};
    assert(sequential_find(a, 5, 8) == 0);
    assert(sequential_find(a, 5, 3) == 1);
    assert(sequential_find(a, 5, 99) == -1);
    assert(sequential_find(a, 0, 1) == -1);
    puts("[PASS] sequential search: empty, hit, duplicate, miss");
}
static void test_binary_search(void) {
    const int a[] = {-4, 1, 3, 3, 3, 9, 12};
    assert(binary_find_first(a, 7, 3) == 2);
    assert(binary_find_first(a, 7, -4) == 0);
    assert(binary_find_first(a, 7, 12) == 6);
    assert(binary_find_first(a, 7, 5) == -1);
    assert(binary_find_first(a, 0, 3) == -1);
    puts("[PASS] binary search: boundaries, duplicates, miss, empty");
}
static void test_bst(void) {
    Node *root = NULL;
    const int values[] = {50, 30, 70, 20, 40, 60, 80};
    for (size_t i = 0; i < 7; ++i) bst_insert(&root, values[i]);
    bst_insert(&root, 40); /* duplicate ignored */
    assert(bst_valid_range(root, -2147483649LL, 2147483648LL));
    assert(bst_find(root, 60) && !bst_find(root, 99));
    bst_delete(&root, 20); /* leaf */
    bst_delete(&root, 30); /* one child */
    bst_delete(&root, 50); /* two children: successor */
    assert(!bst_find(root, 20) && !bst_find(root, 30) && !bst_find(root, 50));
    assert(bst_find(root, 40) && bst_find(root, 60) && bst_find(root, 70));
    assert(bst_valid_range(root, -2147483649LL, 2147483648LL));
    bst_free(root);
    puts("[PASS] BST: search, duplicate policy, leaf/one-child/two-child deletion");
}
static void assert_avl_valid(Avl *root) {
    int h = 0;
    assert(avl_valid(root, -2147483649LL, 2147483648LL, &h));
}
static void test_avl(void) {
    const int cases[4][3] = {{30, 20, 10}, {10, 20, 30},
                             {30, 10, 20}, {10, 30, 20}};
    for (size_t c = 0; c < 4; ++c) {
        Avl *root = NULL;
        for (size_t i = 0; i < 3; ++i) root = avl_insert(root, cases[c][i]);
        assert(root && root->key == 20);
        assert_avl_valid(root);
        assert(avl_find(root, 10) && avl_find(root, 30));
        avl_free(root);
    }

    /* Deletion-triggered LL/RR with a zero-balance heavy child. */
    const int ll[] = {4, 2, 5, 1, 3};
    const int rr[] = {2, 1, 4, 3, 5};
    /* Deletion-triggered LR/RL. */
    const int lr[] = {4, 2, 5, 3};
    const int rl[] = {2, 1, 4, 3};
    const int *sequences[] = {ll, rr, lr, rl};
    const size_t lengths[] = {5, 5, 4, 4};
    const int removed[] = {5, 1, 5, 1};
    for (size_t c = 0; c < 4; ++c) {
        Avl *root = NULL;
        for (size_t i = 0; i < lengths[c]; ++i)
            root = avl_insert(root, sequences[c][i]);
        root = avl_delete(root, removed[c]);
        assert_avl_valid(root);
        assert(!avl_find(root, removed[c]));
        for (size_t i = 0; i < lengths[c]; ++i)
            if (sequences[c][i] != removed[c])
                assert(avl_find(root, sequences[c][i]));
        avl_free(root);
    }

    /* Exercise repeated upward rebalancing and deletion of all node shapes. */
    Avl *root = NULL;
    const int many[] = {40, 20, 60, 10, 30, 50, 70, 5, 15, 25, 35,
                        45, 55, 65, 75, 1, 8, 12, 18};
    for (size_t i = 0; i < sizeof(many) / sizeof(many[0]); ++i) {
        root = avl_insert(root, many[i]);
        assert_avl_valid(root);
    }
    for (size_t i = 0; i < sizeof(many) / sizeof(many[0]); ++i) {
        root = avl_delete(root, many[i]);
        assert(!avl_find(root, many[i]));
        assert_avl_valid(root);
    }
    assert(root == NULL);
    puts("[PASS] AVL: four insertion rotations; deletion LL/RR/LR/RL, zero-child-BF and cascading rebalance");
}
static void test_hash(void) {
    Slot table[HASH_CAPACITY] = {{0}};
    assert(hash_insert(table, 1));
    assert(hash_insert(table, 12)); /* collision at bucket 1 */
    assert(hash_insert(table, 23));
    assert(hash_find(table, 23) >= 0);
    assert(hash_delete(table, 12));
    assert(hash_find(table, 23) >= 0); /* DELETED must not stop a search */
    assert(hash_find(table, 12) == -1);
    assert(hash_insert(table, 34)); /* reuse first tombstone */
    assert(hash_find(table, 34) >= 0);
    assert(hash_insert(table, -1)); /* normalized negative modulo */
    assert(hash_find(table, -1) >= 0);
    puts("[PASS] hash: collisions, tombstones, reuse, negative key");
}
int main(void) {
    test_linear_search();
    test_binary_search();
    test_bst();
    test_avl();
    test_hash();
    puts("All search lab checks passed.");
    return 0;
}

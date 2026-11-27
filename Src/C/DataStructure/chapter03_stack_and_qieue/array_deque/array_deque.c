
/**
 * @brief Array deque example
 * @author Kui.li
 * @date 2026-11-23
 * @version 1.0
 * @file array_deque.c
 */
#include "..\..\utils\common.h"

/**基于环形数组实现的双向队列 */
typedef struct
{
    int *nums;       // 用于存储队列元素的数组
    int front;       // 队首索引
    int queSize;     // 队列大小
    int queCapacity; // 队列容量

} ArrayDeque;


/**
 * @brief Create a deque with given capacity    
 */
ArrayDeque *createDeque(int capacity)
{
    ArrayDeque *deque = (ArrayDeque *)malloc(sizeof(ArrayDeque));

    deque->queCapacity = capacity;

    deque->nums = (int *)malloc(deque->queCapacity * sizeof(int));

    deque->front = 0;
    deque->queSize = 0;
    return deque;
}

/**
 * @brief Destroy the deque
 */
void destroyDeque(ArrayDeque *deque)
{
    free(deque->nums);
    free(deque);
}

/**
 * @brief Get the capacity of the deque
 */
int capacity(ArrayDeque *deque)
{
    return deque->queCapacity;
}

/**
 * @brief Get the size of the deque
 */
int size(ArrayDeque *deque)
{
    return deque->queSize;
}


/**
 * @brief Check if the deque is empty
 */
int isEmpty(ArrayDeque *deque)
{
    return deque->queSize == 0;
}


/**
 * @brief 计算环形数组索引
 */
int dequeIndex(ArrayDeque *deque, int i)
{
    return ((i+capacity(deque)) % capacity(deque));
}



int main(void)
{

    return 0;
}
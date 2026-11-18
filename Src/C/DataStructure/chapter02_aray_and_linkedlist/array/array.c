
/**
 * @brief Array operations
 * @author Kui.li
 * @date 2026-11-18
 * @version 1.0
 * @file array.c
 *
 */
#include "..\..\utils\common.h"

/**
 * @brief  数组元素的增删改查
 */

/**
 * @brief Random access in array
 */
int randomAccess(int *nums, int size)
{
    /*在0到size-1之间随机 */
    int randomIndex = rand() % size;

    return nums[randomIndex];
}

/**
 * @brief Extend array size 扩展数组长度
 * @param enalarge size to extend
 */
int *exted(int *nums, int size, int enalarge)
{

    int *res = malloc((sizeof(int) * (size + enalarge)));
    /**Copy old elements to new array */
    for (int i = 0; i < size; i++)
    {
        res[i] = nums[i];
    }

    for (int i = size; i < size + enalarge; i++)
    {
        res[i] = 0;
    }

    return res;
}

/**
 * @brief Insert element into array  插入元素
 */
void insert(int *nums, int size, int num, int index)
{
    for (int i = size - 1; i > index; i--)
        nums[i] = nums[i - 1];
    nums[index] = num;
}

/**
 * @brief Remove element from array  移除元素
 */
void removeItem(int *nums, int size, int index)
{
    for (int i = index; i < size - 1; i++)
        nums[i] = nums[i + 1];
}

/**
 * @brief Traverse array elements  遍历数组元素
 */
void traverse(int *nums, int size)
{
    for (int i = 0; i < size; i++)
        printf("%d ", nums[i]);
}

/**
 * @brief Find element index in array  查找元素索引
 */
int find(int *nums, int size, int target)
{

    for (int i = 0; i < size; i++)
    {
        if (nums[i] == target)
            return i;
    }
    return -1;
}

int main(void)
{
    /**初始化随机种子数据 */
    srand((unsigned)time(NULL));

    int size = 5;
    int arr[5];
    printf("数组 array: ");
    printArray(arr, size);

    int nums[] = {1, 3, 2, 5, 4};
    printf("数组 nums: ");
    printArray(nums, size);

    /**随机访问 */
    int randomNum = randomAccess(nums, size);
    printf("随机访问: %d\n", randomNum);

    /**扩展数组 */

    int enlarge = 3;
    int *newNums = exted(nums, size, enlarge);
    size += enlarge;
    printf("将数组扩展至 8 ，得到 nums: ");
    printArray(newNums, size);

    /**插入元素 */
    insert(newNums, size, 6, 2);
    printf("在索引2插入数据6之后，得到的数据 nums =  ");
    printArray(newNums, size);
    /**删除元素 */
    removeItem(newNums, size, 2);
    printf("删除索引2的元素后 ,得到nums =: ");
    printArray(newNums, size);

    /**遍历数组 */
    traverse(newNums, size);

    /**查找元素 */

    printf("查找3的索引: ");
    int index = find(newNums, size, 3);
    printf("index: %d\n", index);

    free(newNums);

    return 0;
}
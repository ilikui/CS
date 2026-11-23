/**
 * @brief 空间复杂度分析
 * @date 2026-11-17
 * @author Likui
 * @file space_complexity.c
 *
 *
 */

#include "..\..\utils\common.h"

/**
 * @addtogroup space_complexity
 *   分析函数的空间使用
 */
int func()
{
    // 执行某些操作
    return 0;
}

/**
 * @brief 常量空间示例
 * @param n 输入大小
 * @note 使用常量空间
 * @complexity O(1)
 */
void constant(int n)
{

    /**1. 常量空间，变量，对象占用O(1) */
    const int a = 0;
    int b = 0;
    int nms[1000];
    ListNode *node = newListNode(0);
    free(node);
    /** 2.循环不增加额外空间O(1) */
    for (int i = 0; i < n; i++)
    {
        int c = i;
    }
    /** 3.调用函数也不增加额外空间 O(1) */
    for (int i = 0; i < n; i++)
    {
        func();
    }
}

/**
 * @brief 哈希表结构
 * @note 用于存储键值对
 */
typedef struct{
    int key;
    int val;
    UT_hash_bucket hh;// 哈希桶
}HashTables;

void liner(int n)
{
     /**1. 长度为n的数组占用O(n) 空间 */
    int *nums = malloc(sizeof(int) * n);
    free(nums);

    ListNode **nodes = malloc(sizeof(ListNode *)*n);

    for (int  i = 0; i < n; i++)
    {
       nodes[i] = newListNode(i);
    }
    
    
    
}





int main()
{

    return 0;
}
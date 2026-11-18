/**
 * @brief Linked list operations
 * @author Kui.li
 * @date 2026-11-18
 * @date 2026-11-18
 * @version 1.0
 * @file linked_list.c
 */
#include "..\..\utils\common.h"

/**
 * @brief Insert node into linked list
 * @note 在链表节点n0后插入节点p
 */
void inseet(ListNode *n0 ,ListNode *p)
{
    ListNode *n1 = n0->next;
    p->next = n1;
    n0->next = p;
}

/**
 * @brief Remove node after n0
 * @note 删除n0后的首个节点
 */
void removeItem(ListNode *n0)
{
    if(!n0->next) return;
    
    ListNode *P = n0->next;
    ListNode *n1 = P->next;
    n0->next = n1; 
    // 释放内存 
    free(P);
}



 int main(void)
 {
     return 0;
 }
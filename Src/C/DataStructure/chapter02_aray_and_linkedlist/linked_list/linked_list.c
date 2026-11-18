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
void inseet(ListNode *n0, ListNode *p)
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
    if (!n0->next)
        return;

    ListNode *P = n0->next;
    ListNode *n1 = P->next;
    n0->next = n1;
    // 释放内存
    free(P);
}

/**
 * @brief  链表的访问
 */
ListNode *access(ListNode *head, int index)
{
    for (int i = 0; i < index; i++)
    {
        if (!head)
            return NULL;
        head = head->next;
    }
    return head;
}

/**
 * @brief Find index of target in list
 * @note 链表中查找target 的首个节点
 */
int find(ListNode *head, int target)
{
    int index = 0;
    while (head)
    {
        if (head->val == target)
            return index;
        head = head->next;
        index++;
    }
    return -1;
}

int main(void)
{
    /**初始化链表 */
    ListNode *n0 = newListNode(1);
    ListNode *n1 = newListNode(3);
    ListNode *n2 = newListNode(2);
    ListNode *n3 = newListNode(5);
    ListNode *n4 = newListNode(4);
 
    /** 链表连接    */
    n0->next = n1;
    n1->next = n2;
    n2->next = n3;
    n3->next = n4;

    printf("初始化的链表为\r\n：");
    printLinkedList(n0);

    /**插入节点 */
    inseet(n0, newListNode(0));
    printf("插入后的链表为\r\n");
    printLinkedList(n0);

    /**删除节点 */
    removeItem(n0);
    printf("删除后的链表为\r\n");
    printLinkedList(n0);

    /**查找节点 */
    int index  =find(n0, 2);
    printf("节点2的位置：%d\r\n", index);

    /** 访问节点 */
    ListNode *node = access(n0, 3);
    printf("访问到的节点值：%d\r\n", node->val);


    return 0;
}
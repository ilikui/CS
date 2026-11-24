
/**
 * @brief Array stack example
 * @author Kui.li
 * @date 2026-11-23
 * @version 1.0
 * @file array_stack.c
 *
 */
#include "..\..\utils\common.h"


#define MAX_SIZE 5000

/**
 * @brief 基于数组实现的栈
 */
typedef struct {
    int *data;
    int size;
} ArrayStack;


/**
 * @brief Create a new array stack 构造函数
 * @note Allocates memory for the stack
 * @return ArrayStack*
 */
ArrayStack *newArrayStack(void)
{
    ArrayStack *stack = malloc(sizeof(ArrayStack));
    stack->data = malloc(MAX_SIZE * sizeof(int));
    stack->size = 0;
    return stack;
}

/**
 * @brief  析构函数
 */
void delArrayStack(ArrayStack *stack)
{
    free(stack->data);
    free(stack);
}

/**
 * @brief 获取栈大小    
 */
int size(ArrayStack *stack)
{
    return stack->size;
}

/**
 * @brief Check if stack is empty
 */
bool isEmpty(ArrayStack *stack)
{
    return stack->size == 0;
}


/**
 * @brief Push value onto stack
 */
void push(ArrayStack *stack, int val)
{
    if(stack->size == MAX_SIZE) 
    {
        printf("Stack overflow\n");
        return;
    }
    stack->data[stack->size++] = val;
}


/**
 * @brief Get top value of stack
 * @return int Top value of stack
 */
int peek(ArrayStack *stack)
{
    if(stack->size == 0) 
    {
        printf("Stack is empty\n");
        return INT_MAX;
    }
    return stack->data[stack->size - 1];
}


/**
 * @brief Pop value from stack
 */
int pop(ArrayStack *stack)
{
    int val = peek(stack);
    stack->size--;  
    return val;
}

int main(void)
{

     // 初始化栈
     ArrayStack *stack = newArrayStack();
  
     // 入栈
     push(stack, 1);
     push(stack, 2);
     push(stack, 3);
     push(stack, 4);
     push(stack, 5);
     printf("栈 stack = " );
     printArray(stack->data, stack->size);

    /**访问栈顶元素 */
     int val = peek(stack);
     printf("栈顶元素 Top = %d\n", val);

     /**元素出栈 */
     val = pop(stack);
     printf("出栈元素 Pop = %d ，出栈后 stack ", val);

     printArray(stack->data, stack->size);
 
     /** 获取栈大小 */
     int s = size(stack);
     printf("栈大小 Size = %d\n", s);

     /** 检查是否为空 */
     bool empty = isEmpty(stack);
     printf("栈是否为空 Empty = %s\n", empty ? "true" : "false");

     /** 删除栈 */  
     delArrayStack(stack);

    return 0;
}
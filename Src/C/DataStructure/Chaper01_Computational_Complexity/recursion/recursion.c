/**
 * @brief 递归的使用
 * @date 2026-11-17
 * @author Likui
 * @file recursion.c
 * 
 * 
 */

#include "..\..\utils\common.h"

/**
 * @brief 计算阶乘
 * @param n 输入数字
 * @return int      
 */
int recur(int n) {
    /**1.终止条件 */
    if (n <= 1) 
        return 1;
    /**2.递: 递归调用 */
    int res = n * recur(n-1);
    /**3. 归：返回结果 */
    return res;
}


/**
 * @brief 模拟递归的循环实现
 * @note 使用循环模拟递归
 * @param n 输入数字
 * @return int  结果
 */
int forLookRecur(int n)
{
    int stack[1000];//借助一个大数组来模拟栈
    int top = -1;
    int res = 0;
     // 入栈  递：递归调用
    for (int i = 0; i < n; i++)
    { 
        // 通过 "入栈操作"模拟 递
        stack[1 + top++] = i;
    }

    // 出栈 归：返回结果
    while (top >= 0) {
        // 通过 "出栈操作"模拟 归
        res += stack[top--];
    }
    return res;
}


/**
 * @brief 尾递归实现阶乘
 * @param n 输入数字
 * @param res 结果累积
 * @return int  阶乘结果        
 */
int tailRecur(int n,int res)
{   
    // 终止条件
    if (n==0)
        return res;
    // 尾递归调用
    return tailRecur(n-1,res*n);
}

/**
 * @brief 斐波那契数列
 * @param n 输入数字
 * @return int  斐波那契数  
 */
int fib(int n) {
    // (1) 终止条件
     if(n ==1 || n==2)
         return n-1;
    // (2) 递归调用

    int res = fib(n-1)+fib(n-2);
    return res;
}

int main() {

    int n = 5;
    int res = 0;

    res = recur(n);
    printf("\n递归函数的求和结果 res = %d\n ", res);

    res = forLookRecur(n);
    printf("\n循环模拟递归结果 res = %d\n", res);
    res = tailRecur(n,0);
    printf("\n尾递归结果 res = %d\n", res);
    res = fib(n);
    printf("\n斐波那契结果 res = %d\n", res);
    return 0;
}
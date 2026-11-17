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



int main() {

    printf("%d\n", recur(5));
    return 0;
}
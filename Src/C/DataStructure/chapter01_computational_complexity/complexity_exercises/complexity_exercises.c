/**
 * @brief 递归的使用
 * @date 2026-11-17
 * @author Likui
 * @file complexity_exercises.c
 *
 *
 */

#include <assert.h>

/**
 * @brief 计算前 n 个数的和
 * @param n 输入数字
 * @return int  结果  
 * @note 复杂度为 O(n)
 */
int sumIter(int n)
{
    int res = 0;
    for (int i = 0; i < n; i++)
    {
        res += i;
    }
    return res;
}

/**
 * @brief 递归计算前 n 个数的和
 * @param n 输入数字
 * @return int  结果
 * @note 复杂度为 O(n)
 */
int sumRec(int n)
{
    int res = 0;;
    if(0==n)
        return 0;
    res = n + sumRec(n-1);

    return res;
}

/**
 * @brief 线性循环计算前 n 个数的和
 * @param n 输入数字
 * @return int  结果    
 * @note 复杂度为 O(n)
 */
int linerLoop(int n)
{
    int res = 0;
    for(int i=0;i<n;i++)
        res += i;
    return res;
}

/**
 * @brief 二重循环将 0 到 n-1 的和累加 n 次
 * @param n 输入数字
 * @return int  结果
 * @note 复杂度为 O(n^2)
 */
int quaraticLoop(int n)
{
    int res = 0;
    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            res += j;
    return res;
}

/**
 * @brief 对数循环计算前 n 个数的和
 * @param n 输入数字
 * @return int  结果
 * @note 复杂度为 O(log n)
 */
int logaritmicLoop(int n)
{
    while(n>1)
    {
        n /= 2;
    }
    return n;   
}

int main()
{
    assert(sumIter(5) == 10 && sumRec(5) == 15);
    assert(linerLoop(5) == 10);
    assert(quaraticLoop(0) == 0);
    assert(quaraticLoop(2) == 2);
    assert(quaraticLoop(5) == 50);
    assert(logaritmicLoop(8) == 1);

    return 0;
}
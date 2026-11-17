#include "..\..\utils\common.h"



/**for 循环 */

/**
 * @brief 复杂度是多少？ O(n)=n 
 */
int forLoop(int n) {
    int res = 0;
    /**循环求和 */
    for (int i = 0; i < n; i++) {

        res += i;
    }
    return res;
}


/**while 循环 */
/**
 * @brief 复杂度是多少？ O(n)=n 
 */
int whileLoop(int n) {
    int res = 0;
    int i = 1;

    while (i<n)
    {
        res += i;
        i++;
    }
    return res;
}


/**while 循环2 */
/**
 * @brief 复杂度是多少？ O(n)=log n
 */
int whileLoopII(int n) {

    int res = 0;
    int i = 1;
    while (i<n) {
        res += i;
        i++;
        i *= 2;
    }
    return res;
}

/**
 * @brief 嵌套 for 循环生成字符串   时间复杂度 O(n^2)
 * @param n 循环次数
 * @note  生成的字符串长度较大
 * @return 生成的字符串
 */
char *newstedForLoop(int n){

    int size = n * n * 26 + 1;

    char *res = malloc(size * sizeof(char));
    
    /*循环 i = 1,2 ,3 ....,n-1,n */
    for (int i = 1; i < n; i++)
    {
        for (int j = 1; j < n; j++)
        {
          char tmp[26];
          snprintf(tmp, sizeof(tmp), "(%d, %d), ", i, j);
          strncat(res, tmp,size - strlen(res)-1);
        }
    }
    
    return res;

}



/**
 * 测试 for 循环函数
 * 测试各种循环函数
 * @brief 测试循环函数
 * @return 0
 */

int main() {


    int n = 5;
    int res;

    res = forLoop(n);
    printf("\nfor循环的求和结果 %d\n", res);

    res = whileLoop(n);
    printf("\nwhile循环的求和结果 %d\n", res);

    res = whileLoopII(n);
    printf("\nwhile循环2的求和结果 %d\n", res);

    char * resStr = newstedForLoop(n);
    printf("\n双层for循环的遍历结果 %s\r\n", resStr);


    free(resStr);
    return 0;
}
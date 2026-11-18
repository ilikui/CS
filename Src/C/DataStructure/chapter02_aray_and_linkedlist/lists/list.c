/**
 * @brief List operations
 * @author Kui.li
 * @date 2026-11-18
 * @file list.c
 */

/**
 * @brief 列表的使用
 */
#include "..\..\utils\common.h"

/**列表类 */
typedef struct
{

    int *arr;         // 数组 存储列表元素
    int capacity;     // 列表容量
    int size;         // 列表大小
    int extendRation; // 列表每次扩容的倍数
} List;

/**
 * @brief  构造函数
 */
List *newList()
{
    List *nums = malloc(sizeof(List));

    nums->capacity = 10;
    nums->arr = malloc(sizeof(int) * nums->capacity);
    nums->size = 0;
    nums->extendRation = 2;
    return nums;
}

/**析构函数 */

void destroyList(List *nums)
{
    free(nums->arr);
    free(nums);
}

/**
 * @brief 获取列表大小
 */
int size(List *nums)
{
    return nums->size;
}

/**
 * @brief 获取列表容量
 */
int capacity(List *nums)
{
    return nums->capacity;
}

/**
 * @brief 获取指定索引的元素
 */
int get(List *nums, int index)
{
    assert(index >= 0 && index < nums->size);
    return nums->arr[index];
}

/**
 * @brief 设置指定索引的元素
 */
int set(List *nums, int index, int num)
{
    assert(index >= 0 && index < nums->size);
    nums->arr[index] = num;
}

/**-------------------------------------------------------------------------------------------------------- */

/**
 * @brief 删除指定索引的元素
 */
int removeItem(List *nums, int index)
{
    assert(index >= 0 && index < size(nums));
    int num = nums->arr[index];

    for (int i = index; i < size(nums) - 1; i++)
    {
        nums->arr[i] = nums->arr[i + 1];
    }

    nums->size--;
    return num;
}

/**
 * @brief 扩展列表容量
 */
void extendCapacity(List *nums)
{

    // 先分配空间
    int newCapacity = capacity(nums) * nums->extendRation;
    int *extend = (int *)malloc(sizeof(int) * newCapacity);
    int *temp = nums->arr;
    // 拷贝旧数据到新数据
    for (int i = 0; i < nums->size; i++)
    {
        extend[i] = temp[i];
    }
    // 释放旧数组
    free(temp);
    // 更新新数据
    nums->arr = extend;
    nums->capacity = newCapacity;
}

/**
 * @brief 添加元素到列表
 * @note 在尾部添加元素
 */
void add(List *nums, int num)
{
    if (nums->size == nums->capacity)
    {
        extendCapacity(nums); // 扩容数据
    }
    nums->arr[size(nums)] = num;
    nums->size++;
}

/**
 * @brief 插入元素到指定位置
 * @note 会移动后面的元素
 */
void insert(List *nums, int index, int num)
{

    assert(index >= 0 && index <= size(nums));

    if (size(nums) == capacity(nums))
    {
        extendCapacity(nums);
    }
    for (int i = size(nums); i > index; i--)
    {
        nums->arr[i] = nums->arr[i - 1];
    }
    nums->arr[index] = num;
    nums->size++;
}

/**
 * @brief 转为数组
 */
int *toArray(List *nums)
{
    return nums->arr;
}

int main(void)
{
    //初始化列表
    List *nums = newList();

    add(nums, 1);
    add(nums, 3);
    add(nums, 2);
    add(nums, 5);
    add(nums, 4);

    printf("列表 nums = ");
    printArray(toArray(nums),size(nums));
    printf("容量 = %d,长度 = %d\n", capacity(nums), size(nums));

    /**在中间插入元素 */

    insert(nums, 3, 10);
    printf("在索引 3 处插入的元素，得到 nums =  ");
    printArray(toArray(nums),size(nums));



    /**访问元素 */
    int num = get(nums, 2); 
    printf("索引 2 的元素 = %d\n", num);

    /**更新元素 */
    set(nums, 2, 20); 
    printf("更新索引 2 的元素，得到 nums = ");
    printArray(toArray(nums), size(nums));
  

    /**测试扩容机制 */

    for (int  i = 0; i < 10; i++)
    {
        add(nums, i);
    }
    printf("扩容后 nums = ");
    printArray(toArray(nums), size(nums));
    printf("容量 = %d,长度 = %d\n", capacity(nums), size(nums));
    

    destroyList(nums);
    return 0;
}
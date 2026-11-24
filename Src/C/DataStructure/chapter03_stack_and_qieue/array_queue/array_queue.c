
/**
 * @brief Array queue example
 * @note Uses circular array
 * @file array_queue.c
 */

#include  "..\..\utils\common.h"


/**基于环形数组实现队列 */
typedef struct {
    int *nums; //用于存储队列元素的数组
    int frot; //对首指针，指向队首元素
    int queSzie; //队列大小
    int queCapacity; //队列容量
}ArrayDeque;


/**
 * @brief Create a queue with given capacity
 * @param capacity Queue capacity
 * @return ArrayDeque* Created queue    
 */
ArrayDeque *createQueue(int capacity){
    assert(capacity > 0);

    ArrayDeque *queus = (ArrayDeque*)malloc(sizeof(ArrayDeque));
    if (queus == NULL) {
        return NULL;
    }

    //初始化队列

    queus->queCapacity = capacity;

    queus->nums = (int*)malloc(sizeof(int) * queus->queCapacity);
    if (queus->nums == NULL) {
        free(queus);
        return NULL;
    }
    queus->frot = 0;
    queus->queSzie = 0;

    return queus;

}

/**
 * @brief Destroy the queue and free memory
 */
void destroyQueue(ArrayDeque *que){
    free(que->nums);
    free(que);
}

/**
 * @brief Get queue capacity
 * @param que Queue
 * @return int Capacity     
 */
int capacity(ArrayDeque *que){
    return que->queCapacity;
}

/**
 * @brief Get queue size
 * @param que Queue
 * @return int Size     
 */
int size(ArrayDeque *que){
    return que->queSzie;
}

/**
 * @brief Check if queue is empty
 * @param que Queue
 * @return bool True if empty   
 */
bool isEmpty(ArrayDeque *que){
    return size(que) == 0;
}


/**
 * @brief Get front element of queue
 * @param que Queue
 * @return int Front element
 */
int peek(ArrayDeque *que){

    assert(size(que) != 0);
    
    return que->nums[que->frot];
}

/**
 * @brief Add element to queue
 * @param que Queue
 * @param num Element to add    
 */
void push(ArrayDeque *que, int num){

    if(size(que) == que->queCapacity)
    {
        printf("Queue is full\n");
        return;
    }
    //计算队尾位置，指向队尾索引+1
    //通过取余操作实现rear 越过数组尾部后返回头部
   int rear = (que->frot + que->queSzie) % que->queCapacity;
   que->nums[rear] = num;
   que->queSzie++;

}


/**
 * @brief Remove front element from queue
 * @param que Queue
 * @return int Removed element  
 */
int pop(ArrayDeque *que){

    int num = peek(que);
    que->frot = (que->frot + 1) % que->queCapacity;
    que->queSzie--;
    return num;
}



/**
 * @brief Convert queue to array
 * @param que Queue
 * @param queSize Output size
 * @return int* Array of elements       
 */
int  *toArray(ArrayDeque *que,int *queSize){
    *queSize = que->queSzie;
    
    int *res = (int *)calloc(que->queSzie, sizeof(int));
    if (res == NULL) {
        return NULL;
    }
    int j = que->frot;
    for(int i = 0;i < *queSize;i++){
        res[i] = que->nums[j % que->queCapacity];
        j++;
    }
    return res;
}



int main() {

  /**初始化队列 */
    int capacity = 10;
    int queSize;
    ArrayDeque *queue = createQueue(capacity);
    if (queue == NULL) {
        fprintf(stderr, "Failed to create queue\n");
        return 1;
    }
    
    /**元素入队 */
    push(queue, 1);
    push(queue, 3);
    push(queue, 2);
    push(queue, 5);
    push(queue, 4);

    printf("队列 Queue: ");

    int *queueArray = toArray(queue, &queSize);
    if (queueArray == NULL && queSize != 0) {
        fprintf(stderr, "Failed to convert queue to array\n");
        destroyQueue(queue);
        return 1;
    }
    printArray(queueArray, queSize);
    free(queueArray);

    /**查看队首元素 */
    int peekNum = peek(queue);
    printf("队首元素: %d\n", peekNum);

    /**查看队列大小 */
    printf("队列大小: %d\n", size(queue));
   
    /**出队 */
    peekNum = pop(queue);
    printf("出队元素 pop =  %d\n,出队后 queue: ", peekNum);
    printArray(toArray(queue, &queSize), queSize);

     /**获取队列大小 */
    int queueSize = size(queue);
    printf("队列大小: %d\n", queueSize);


    bool empty = size(queue);
    printf("队列是否为空:=%s\r\n", empty ? "true" : "false" );



    for(int i = 0;i < size(queue);i++){

        push(queue, i);
        pop(queue);
        printf("第 %d 轮入队 + 出队后 queus = ", i);
        printArray(toArray(queue, &queSize), queSize);     
    }

    destroyQueue(queue);

    return 0;
}
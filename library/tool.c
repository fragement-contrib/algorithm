#include <stdio.h>

// 打印数组（int）
void printIntArray(char tips[], int data[], int length)
{

    printf("%s：[", tips);
    for (int i = 0; i < length - 1; i++)
    {
        printf("%d, ", data[i]);
    }
    printf("%d]\n", data[length - 1]);
}
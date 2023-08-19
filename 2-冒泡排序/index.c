#include "../library/tool.c"

int main()
{
    int data[] = {5, 14, 6, 32, 23, 4, 32, 4, 234, 4, 0, 90};
    int length = sizeof(data) / sizeof(data[0]);

    printIntArray("排序前", data, length);

    for (int len = length; len > 1; len--)
    {
        for (int index = 0; index <= len - 2; index++)
        {

            if (data[index] > data[index + 1])
            {
                int temp = data[index];
                data[index] = data[index + 1];
                data[index + 1] = temp;
            }
        }
    }

    printIntArray("排序后", data, length);

    return 0;
}
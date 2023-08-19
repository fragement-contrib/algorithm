#!/usr/bin/python3

data = [5, 14, 6, 32, 23, 4, 32, 4, 234, 4, 0, 90]

print("排序前："+str(data))

for dLen in range(len(data), 1, -1):
    for index in range(0, dLen-1):
        if data[index] > data[index+1]:
            temp = data[index]
            data[index] = data[index+1]
            data[index+1] = temp

print("排序后："+str(data))

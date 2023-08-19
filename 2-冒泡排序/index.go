package main

import "fmt"

func main() {
	data := [...]int{5, 14, 6, 32, 23, 4, 32, 4, 234, 4, 100, 90}

	fmt.Println("排序前：",data)

	for len := len(data); len>1; len--{
		for index := 0; index <= len-2; index++ {
			if(data[index] > data[index+1]){
				temp := data[index]
				data[index] = data[index+1]
				data[index+1] = temp
			}
		}
	}

	fmt.Println("排序后：", data)
}
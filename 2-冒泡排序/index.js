let data = [5, 14, 6, 32, 23, 4, 32, 4, 234, 4, 100, 90];
console.log("排序前：" + data);

let temp;

// len表示需要冒泡的长度，逐级递减-1
for (let len = data.length; len > 1; len--) {
    for (let index = 0; index <= len - 2; index++) {

        if (data[index] > data[index + 1]) {
            temp = data[index];
            data[index] = data[index + 1];
            data[index + 1] = temp;
        }

    }
}

console.log("排序后：" + data);

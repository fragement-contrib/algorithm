let data = [5, 14, 6, 32, 23, 4, 32, 4, 234, 4, 0, 90, 9];
console.log("排序前：" + data);

// mergeLen表示已经完成排序的长度
let helpArr = [];
for (let mergeLen = 1; mergeLen < data.length; mergeLen *= 2) {

    // k表示当前需要合并的两个组的左边界
    // 所以，第一个组的起点是k，第二个组的起点是k+mergeLen
    for (let k = 0; k < data.length; k += mergeLen * 2) {

        let i = k, j = k + mergeLen, rightIndex = Math.min(k + mergeLen * 2, data.length) - 1;
        for (let t = k; t <= rightIndex; t++) {

            // 如果第二段没有越界的情况下比较小
            // 如果第一个越界了
            if ((j <= rightIndex && data[i] > data[j]) || i >= k + mergeLen) {

                helpArr[t] = data[j];
                j++;

            }

            // 如果第一段比较小
            else {
                helpArr[t] = data[i];
                i++;
            }
        }

        // 合并好的复制回去
        for (let t = k; t <= rightIndex; t++) {
            data[t] = helpArr[t];
        }
    }
}

console.log("排序后：" + data);
/**
    * 遍历数组，对比相邻 两个数 arr[j] 和 arr[j + 1]，如果 arr[j] > arr[j + 1]，则交换两个数的位置
*/
function sort(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
console.log(sort([6,2,3,45, 4 ,4]))

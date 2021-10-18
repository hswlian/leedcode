// 找出数组中重复的数字。


// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 示例 1：

// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 
//  

// 考点：排序的方法、哈希表
// =========================================== 解析/思路 =============================
// 方法一（先排序，后对比）：先排序，然后看相邻元素是否有相同的，有直接return。 不过很慢，时间O(nlogn)了，空间O(1)
// 方法二（哈希表法）：哈希表 时间O(n)，空间O（1），时间复杂度O(n)，空间复杂度O(1)。
// 可以看做是一种原地哈希，不过没有用到字典。具体做法就是因为题目中给的元素是 < len（nums）的，所以我们可以让 位置i 的地方放元素i。如果位置i的元素不是i的话，那么我们就把i元素的位置放到它应该在的位置，即 nums[i] 和nums[nums[i]]的元素交换，这样就把原来在nums[i]的元素正确归位了。
// 如果发现 要把 nums[i]正确归位的时候，发现nums[i]（这个nums[i]是下标）那个位置上的元素和要归位的元素已经一样了，说明就重复了，重复了就return

console.log(`===== 方法1:先排序，再看相邻是否相等 ========`)
// 利用快排, 排序
function sort(arr){
    if(arr.length <= 1) return arr
    let left = [];
    let right = [];
    let len = arr.length;
    let temp = arr.splice(parseInt(len / 2) , 1)
    for(let k = 0; k < len - 1 ; k ++){
        if(arr[k] < temp){
            left.push(arr[k])
        }else{
            right.push(arr[k])
        }
    }
    return sort(left).concat(temp , sort(right))
}
// 相邻的是否相等
function isSameNode(arr){
    let temp = sort(arr);
    // 判断相邻是否相等
    console.log(temp)
}
console.log(isSameNode([3, 4, 2, 0, 0, 1]))


// 2 <= n <= 100000
console.log(`===== 方法2:哈希表 ========`)
// 遍历数组
function getSameNode(arr) {
    let a = null;
    let map = {}
    for (var i of arr) {
        map[i] ?  a = i : map[i] = true
    }
    return a
}
console.log(getSameNode([3, 4, 2, 0, 0, 1]))


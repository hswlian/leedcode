// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 示例 1：

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 示例 3：

// 输入：nums1 = [0,0], nums2 = [0,0]
// 输出：0.00000
// 示例 4：

// 输入：nums1 = [], nums2 = [1]
// 输出：1.00000
// 示例 5：

// 输入：nums1 = [2], nums2 = []
// 输出：2.00000
//  

// 提示：

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106
let warning = ` sort 方法排序 ，负数会有坑啊，需要对 sort 方法重新封装一下`
console.log(warning)
function sort(a){
    a.sort(function(a,b){return a-b;});
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 第一步：合并数组
    let numsum = nums1.concat(nums2)

    let nums3 = null

    // 第二步：将数组从小到大排序
    nums3 = sort(numsum)

    // 第三步：区中间的两个数，保留 5位 小数
    let len = numsum.length - 1;

    if(len % 2 != 0){
        nums3 = ((numsum[Math.floor(len / 2)] + numsum[Math.floor(len / 2) + 1]) / 2).toFixed(5)
    }else{
        nums3 = numsum[Math.floor(len / 2)].toFixed(5)
    }
    console.log(nums3)

    return nums3
    
};
findMedianSortedArrays([3], [-2,-1])
 
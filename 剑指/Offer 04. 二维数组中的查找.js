// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

//  

// 示例:

// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。



/**
 * 考点：二维数组的查找
 * ====================== 思路 ========================
 * 方法一：以先行后列的顺序遍历二维数组，同时，对比 给定的值，如果有 且 isSame 不为 true 则返回。时间复杂度最高为 O(n2)，最低为 O(n)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let isSame = false
    for(let i = 0 ,leni = matrix.length ; i < leni && isSame === false ; i ++){
        for(let j = 0, lenj = matrix[i].length; j < lenj ; j ++){
            if(matrix[i][j] === target){
                isSame = true
            }
        }
    }
    return isSame
};

let arr = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
console.log(`结果为： ${findNumberIn2DArray(arr, 26)}`)
console.log(`结果为： ${findNumberIn2DArray(arr, 20)}`)

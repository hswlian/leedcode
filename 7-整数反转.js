// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。
//  

// 示例 1：

// 输入：x = 123
// 输出：321
// 示例 2：

// 输入：x = -123
// 输出：-321
// 示例 3：

// 输入：x = 120
// 输出：21
// 示例 4：

// 输入：x = 0
// 输出：0
//  

// 提示：

// -231 <= x <= 231 - 1

/**
 * 先把字符串转化为 数组，先检查 是否为 负数， 如果是 负数，则把 符号 去掉，然后 ,反转数组
* 然后遍历数组，然后 去除开头 的 0 号
* 然后
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let z = false    // 符号，默认是 正号
    x = new String(x)
    if (x === 0) {
        return 0
    }
    let y = x.split('');
    if (y[0] == '-') {
        y.shift()
        z = true
    }
    y = y.reverse()
    
    let isZero = false
    let h = []
    for (let i = 0, len = y.length; i < len; i++) {
        if (i == 0 && isZero) {
            // 如果等于 0 且 isZero 不等于false
            return
        }
        if (i !== 0) {
            isZero = true
        }
        h.push(y[i])
    }
    let n = Number(h.join(''))
    if (n == n) {
        if (z) {
            return -n
        } else {
            return n
        }
    } else {
        return 0
    }
    
    
};

console.log(reverse(1534236469))
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

// 示例 1：

// 输入：s = "We are happy."
// 输出："We%20are%20happy."

// 限制：

// 0 <= s 的长度 <= 10000

/**
 * 考点：字符串的查找
 * ====================== 思路 ========================
 * 方法一：声明 字符串 k ，遍历原字符串 s，将判断 是否为空格是空格则 在 k 中放入 字符 c ，否则，放入字符 %20
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let k = ''
    for(let i = 0 ,len = s.length ; i < len ; i ++){
        if(s[i] == ' '){
            k += '%20'
        }else{
            k += s[i]
        }
    }
    return k
};

console.log(replaceSpace('We are happy.'))

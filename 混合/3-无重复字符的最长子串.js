// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 示例 4:

// 输入: s = ""
// 输出: 0

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let minIndex = 0
    let ans = 0   // 重复字符长度
    for (let i = 0; i < s.length; i++){
        if (s.indexOf(s[i], minIndex) < i) {
            // 遍历数组，如果后面 minIndex 的长度没有这个字符，则 重置 minIndex
            minIndex = s.indexOf(s[i], minIndex) + 1
        } else {
            // 如果有重复，则重置 ans
            ans = Math.max(ans, i - minIndex + 1)
        } 
    }
    return ans
};

console.log(lengthOfLongestSubstring("bbbbb"))
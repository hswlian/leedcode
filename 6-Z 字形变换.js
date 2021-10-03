// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
//  

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：

// 输入：s = "A", numRows = 1
// 输出："A"
//  

// 提示：

// 1 <= s.length <= 1000
// s 由英文字母（小写和大写）、',' 和 '.' 组成
// 1 <= numRows <= 1000

/**
 * 考点：存储二维数组，读取二维数组
 * 解题思路：
 * （1）定义一个 二维数组，遍历字符串，然后通过数组的 列循环 开始存储 字符串，列的长度为 numRows，直到字符串长度等于 0
 * （2）开始以行 读取数组。
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let strArr = []

    let i = 0 ; // 数组

    // 定义一个 二维数组，遍历字符串，然后通过数组的 列循环 开始存储 字符串，列的长度为 numRows，直到字符串长度等于 0
    while(s.length){
        for(let j = 0; j < numRows ; j ++){
            if(s.length){
                let _char = s.substr(s.length - 1  , 1)
                s = s.substring(0, s.length -1)
                console.log(s)
                strArr[i] === undefined ? strArr[i] = []: ''
                strArr[i][j] = _char
            } 
        }
        i ++;
    }

    console.log(`======  这是数组 ======= ${JSON.stringify(strArr)}`)

    // 开始以行 读取数组。
};
convert('PAHNAPLSIIGYIR', 4)
// 输出："PINALSIGYAHRPI"


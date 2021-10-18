// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

//  

// 例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。

// 示例 1：

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：

// 输入：board = [["a","b"],["c","d"]], word = "abcd"
// 输出：false

/**
 * 考点：dfs (深度优先搜索算法)
 * 思路：
 * （1）以 a[i][j] 为起点，遍历 a[i + 1][j], 如果 a[i + 1][j] === word[0] ,则 对比 a[i + 2][j] 是否等于 word[1]，如果不等于 ，return false。
 * （2）如果 
 * （2）
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m =  board.length
    let n = board[0].length
    for(let i = 0 ; i < m ; i ++){
        for(let j = 0 ; j < n ; j ++){
                if(dfs(i ,j ,0)){
                    return true
                }
        }
    }


    function dfs(i ,j ,k){
        if(i >= m || j >= n || i < 0 || j < 0  || word[k] !== board[i][j]){
            return false
        }

        if( k === word.length -1 ){
            return true
        }

        let temp = board[i][j];
        board[i][j] = '-';
        res = dfs(i , j + 1, k +1) || dfs(i + 1,j, k +1) || dfs( i -1, j, k +1) || dfs( i , j  -1 , k +1);
        board[i][j] = temp;
        return res
    }

    return false
};

exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")


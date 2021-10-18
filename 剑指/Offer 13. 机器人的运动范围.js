// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

//  

// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
//  const isTrue = (m, n, k) => {
//     let [sum1, sum2] = [0, 0];
//     while (m !== 0) {
//         sum1 += m % 10;
//         m = Math.floor(m / 10);
//     }
//     while (n !== 0) {
//         sum2 += n % 10;
//         n = Math.floor(n / 10);
//     }
//     return sum1 + sum2 <= k;
// };

var movingCount = function (m, n, k) {
    let res = 0
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const dfs = (i, j) => {
        // 若越界，或遇到已访问过的，return
        if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] || (i % 10 + Math.floor(i/ 10) + j %10 + Math.floor(j/10)) > k) return;
        // 标记访问
        visited[i][j] = true;
        res++;
        dfs(i + 1, j);
        dfs(i, j + 1);
        dfs(i - 1, j);
        dfs(i, j - 1);
    };
    dfs(0, 0);
    return res;
}

console.log(movingCount(2,3,1))
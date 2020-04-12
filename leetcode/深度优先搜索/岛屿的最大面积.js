/*
* 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
* */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    /*
    * 思路：DFS
    * 找到1，开始遍历它的上下左右是否为1，递归算法
    * 标记已经遍历过的，防止重复遍历
    * 注意边界位置，防止遍历出边界
    * */
    let res = 0,maxRes = 0
    let maxi = grid.length - 1,maxj = grid[0].length - 1
    for (let i = 0;i<=maxi;i++) {
        for (let j = 0;j <= maxj;j++) {
            if (grid[i][j] == 1) {
                res = dfs(grid,i,j,maxi,maxj)
                maxRes = Math.max(maxRes,res)
            }

        }
    }
    function dfs(grid,i,j,maxi,maxj) {
        let res = 0
        if (grid[i][j] == 1) {
            res ++
            grid[i][j] = 2
            if (i != 0) {
                res += dfs(grid,i - 1,j,maxi,maxj)
            }
            if (i < maxi) {
                res += dfs(grid,i + 1,j,maxi,maxj)
            }
            if (j != 0) {
                res += dfs(grid,i ,j - 1,maxi,maxj)
            }
            if (j < maxj) {
                res += dfs(grid,i,j+1,maxi,maxj)
            }
        }
        return res
    }

    return maxRes
};
console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));
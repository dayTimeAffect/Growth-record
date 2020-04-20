/*
* 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
* 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
* 此外，你可以假设该网格的四条边均被水包围。
* */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    /*
    * 深度优先搜索：
    * 搜索过的需要标记出来，防止重复搜索
    * */
    let dfs = function (i,j,I,J) {
        if (grid[i][j] == 1) {
            grid[i][j] = 2
            if (i + 1 < I && grid[i + 1][j] == 1) {
                dfs(i + 1,j,I,J);
            }
            if (i - 1 >= 0 && grid[i - 1][j] == 1) {
                dfs(i - 1,j,I,J);
            }
            if (j + 1 < J && grid[i][j + 1] == 1) {
                dfs(i,j + 1,I,J);
            }
            if (j - 1 >= 0 && grid[i][j - 1] == 1) {
                dfs(i,j - 1,I,J);
            }
        }
    }
    let res = 0
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[0].length; j ++) {
            if (grid[i][j] == 1) {
                dfs(i,j,grid.length,grid[0].length)
                res ++
            }
        }
    }
    return res

};
console.log(numIslands(
    [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
));
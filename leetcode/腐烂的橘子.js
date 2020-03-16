/*
题994：
* 在给定的网格中，每个单元格可以有以下三个值之一：

值 0 代表空单元格；
值 1 代表新鲜橘子；
值 2 代表腐烂的橘子。
每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。
* */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    /*
    * 思路：多源广度优先搜索
    * oranges记录好橘子个数
    * rottingArr 记录当前天被传染的坏橘子
    * 首先找出初始的坏橘子
    * 然后从这些坏橘子中开始寻找第二天哪些会被传染记录下来，更新rottingArr
    * 知道rottingArr长度为0跳出循环
    *
    * */
    let res = -1
    let oranges = 0
    let rottingArr = []
    for (let i = 0;i < grid.length;i++){
        for (let j = 0;j < grid[0].length;j++){
            if (grid[i][j] != 0){
                oranges ++
                if (grid[i][j] == 2) {
                    rottingArr.push(i,j)
                    oranges --
                }
            }
        }
    }
    while (rottingArr.length != 0){
        res ++
        let arr = []
        for (let k = 0;k < rottingArr.length / 2;k++){
            let i = rottingArr[2*k]
            let j = rottingArr[2*k + 1]
            if (grid[i][j + 1] == 1) {arr.push(i,j+1);grid[i][j + 1] = 2;oranges --}
            if (grid[i][j - 1] == 1) {arr.push(i,j - 1);grid[i][j - 1] = 2;oranges --}
            if (grid.length - 1 != 0) {
                if (i == 0) {
                    if (grid[i + 1][j] == 1) {arr.push(i + 1,j);grid[i + 1][j] = 2;oranges --}
                }
                else if (i == grid.length - 1) {
                    if (grid[i - 1][j] == 1) {arr.push(i - 1,j);grid[i - 1][j] = 2;oranges --}
                }
                else{
                    if (grid[i + 1][j] == 1) {arr.push(i + 1,j);grid[i + 1][j] = 2;oranges --}
                    if (grid[i - 1][j] == 1) {arr.push(i - 1,j);grid[i - 1][j] = 2;oranges --}
                }
            }
        }
        rottingArr = arr
    }
    if (oranges) {
        return -1
    }else{
        return res == -1 ? 0 : res
    }
};
console.log(orangesRotting([[1,1,0],[1,0,0],[0,1,1]]));
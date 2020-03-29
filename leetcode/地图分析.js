/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    /*
    * 暴力法
    * */
    let res = -1
    let land = [],ocean = []
    for (let i = 0;i < grid.length; i ++){
        for (let j = 0;j < grid.length; j ++) {
            grid[i][j] == 0 ? ocean.push([i,j]) : land.push([i,j])
        }
    }
    if (land.length == 0 || ocean.length == 0) {
        return res
    }
    for (let i = 0;i < ocean.length;i ++) {
        let temRes = Infinity
        for (let j = 0;j < land.length;j++) {
            temRes = Math.min(temRes,Math.abs(ocean[i][0] - land[j][0]) + Math.abs(ocean[i][1] - land[j][1]))
            if (temRes === 1) {
                break;
            }
        }
        res = Math.max(res,temRes)
    }
    return res
};
/*
* 优质题解：BFS（广度优先搜索）
* https://leetcode-cn.com/problems/as-far-from-land-as-possible/solution/jian-dan-java-miao-dong-tu-de-bfs-by-sweetiee/315551/
* */
console.log(maxDistance(
    [[1,0,0],[0,0,0],[0,0,0]]

));
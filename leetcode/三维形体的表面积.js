/*
* 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。

  每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

  请你返回最终形体的表面积。
  输入：[[1,2],[3,4]]
  输出：34
  输入：[[1,1,1],[1,0,1],[1,1,1]]
  输出：32

  题目解析：
    number.length表示矩形 N 的值，对应的数字是放的矩形的个数
* */
/**
 * @param {number[][]} grid
 * @return {number}
 */
/*var surfaceArea = function(grid) {
    let top_bottom = 0,left_right = 0,front_behind = 0
    let N = grid.length
    let line = 0,colArr = new Array(N).fill(0)
    for (let i = 0;i < N;i ++) {
        line = 0
        for (let j = 0;j < N; j++) {
            if (grid[i][j] > 0) {
                top_bottom += 2
                grid[i][j] > line ? line = grid[i][j] : ''
                grid[i][j] > colArr[j] ? colArr[j] = grid[i][j] : ''
            }

            if (i > 0 && i < N - 1){
                if (grid[i][j] < grid[i + 1][j] && grid[i][j] < grid[i - 1][j]) {
                    front_behind += 2 * Math.min(grid[i + 1][j] - grid[i][j],grid[i - 1][j] - grid[i][j])
                }
            }
            if (j > 0 && j < N - 1) {
                if (grid[i][j] < grid[i][j + 1] && grid[i][j] < grid[i][j - 1]) {
                    left_right += 2 * Math.min(grid[i][j + 1] - grid[i][j],grid[i][j - 1] - grid[i][j])
                }

            }
        }
        left_right += 2 * line
    }
    for(let val of colArr){
        front_behind += val * 2
    }
    console.log(top_bottom, left_right, front_behind);
    return top_bottom + left_right + front_behind
};*/
/*var surfaceArea = function(grid) {
    /!*
    * 思路：分别判定上下  左右  前后的面积
    * 上下的面积只有有值 就 加 1*2
    * 左右面积和前后面积：比较分别比较  当前位置与右边位置   当前位置与下一列的位置   如果不想等  取双方的差绝对值
    * 防止数组算法溢出，前后新增两行0   左右溢出undefined取值为0
    * *!/
    let top_bottom = 0,left_right = 0,front_behind = 0
    let N = grid.length
    grid.push(new Array(N).fill(0))
    grid.unshift(new Array(N).fill(0))
    for (let i = 0;i < N + 1;i ++) {
        left_right += grid[i][0]
        for (let j = 0;j < N; j++) {
            if (grid[i][j] > 0) {
                top_bottom += 2
            }
            if (grid[i][j] != grid[i][j +1]){
                left_right += Math.abs(grid[i][j] - (grid[i][j +1] || 0))
            }
            if (grid[i][j] != grid[i + 1][j]) {
                front_behind += Math.abs(grid[i][j] - grid[i + 1][j])
            }
        }
    }
    return top_bottom + left_right + front_behind
};*/

var surfaceArea = function(grid) {
    /*
    * 思路：分别判定上下  左右  前后的面积
    * 上下的面积只有有值 就 加 1*2
    * 左右面积和前后面积：比较分别比较  当前位置与右边位置   当前位置与下一列的位置   如果不相等  取双方的差绝对值（相当于减去了贴合部分）
    * 防止数组算法溢出，前后新增两行0   右溢出undefined新增0
    * */
    let res = 0
    let N = grid.length
    grid.push(new Array(N).fill(0))
    grid.unshift(new Array(N).fill(0))
    for (let i = 0;i < N + 1;i ++) {
        grid[i].push(0)
        res += grid[i][0] //
        for (let j = 0;j < N; j++) {
            if (grid[i][j] > 0) {
                res += 2
            }
            if (grid[i][j] != grid[i][j +1]){
                res += Math.abs(grid[i][j] - grid[i][j +1])
            }
            if (grid[i][j] != grid[i + 1][j]) {
                res += Math.abs(grid[i][j] - grid[i + 1][j])
            }
        }
    }
    return res
};
console.log(surfaceArea(
    [[0,3,4,3],[4,5,0,5],[0,4,2,4],[4,0,0,2]]
));
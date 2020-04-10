/*
* 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
* 也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
* 但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
* 输入：m = 2, n = 3, k = 1
* 输出：3
* */
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    /*
    * 思路：递推，先创建一个m*n的数组，如果当前（i,j）满足条件，则继续判断（i+1,j）和（i，j+1）
    * 注意边界不要超出
    * 注意不要重复计算
    * */
    let res = 0
    let arr = []
    for (let i = 0;i < m;i ++){
        arr.push([])
        for (let j = 0;j < n;j ++){
            arr[i].push(0)
        }
    }
    let bfs = function (i,j,m, n, k) {
        let count = 0
        let str = String(i)+String(j)
        for (let i = 0;i < str.length; i ++){
            count += Number(str[i])
        }
        if (count <= k){
            if (arr[i][j] === 0){
                res ++
                arr[i][j] = 1
                if (i < m - 1) {
                    bfs(i + 1,j,m, n, k)
                }
                if (j < n - 1){
                    bfs(i,j + 1,m, n, k)
                }
            }
        }
    }
    bfs(0,0,m, n, k)
    return res
};
console.log(movingCount(
    7,2,3
));



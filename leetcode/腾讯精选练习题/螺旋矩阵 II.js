/*
* 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
* */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = new Array(n).fill(-1)
    result = result.map((v) => new Array(n).fill(-1)) //创建矩阵
    result[0][0] = 1 //以1开始
    let direction = 'x' //方向
    let operation = +1 //操作
    let index = 2
    let y = 0, x = 0
    while (index <= n*n){
        if (direction === 'y') {
            if (result[y + operation] && result[y + operation][x] === -1) {
                result[y + operation][x] = index
                y = y + operation
                index ++
            }else{
                direction = 'x'
                operation = x === y ? -1 : +1
            }

        }
        if (direction === 'x') {
            if (result[y] && result[y][x + operation] === -1) {
                result[y][x + operation] = index
                x = x + operation
                index ++
            }else{
                direction = 'y'
                operation = x < y ? -1 : +1
            }
        }

    }
    return result
};
// console.log(generateMatrix(3));

var generateMatrix_best = function(n) {
    let result = new Array(n).fill(-1)
    result = result.map((v) => new Array(n).fill(-1))
    let index = 1, target = n * n, left = 0, top = 0, right = n - 1, bottom = n - 1;
    //left：左边界，top：上边界，right：右边界，bottom：下边界
    //模拟环绕，每旋转一圈，边界向内缩1
    while (index <= target){
        for (let i = left; i <= right; i ++) result[top][i] = index ++
        top ++
        for (let i = top; i <= bottom; i ++) result[i][right] = index ++
        right --
        for (let i = right; i >= left; i --) result[bottom][i] = index ++
        bottom --
        for (let i = bottom; i >= top; i --) result[i][left] = index ++
        left ++
    }
    return result
};
console.log(generateMatrix_best(3));

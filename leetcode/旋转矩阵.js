
/*
*
* 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
* 不占用额外内存空间能否做到？
* */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    /*
    * 先左上-右下对角线反转
    * 再中线反转
    * */
    let N = matrix.length
    for (let i = 0;i < N;i ++){
        for (let j = i;j < N;j ++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }
    for (let i = 0;i < N;i ++){
        for (let j = 0;j < N / 2; j ++){
            [matrix[i][j],matrix[i][N - j - 1]] = [matrix[i][N - j - 1],matrix[i][j]];
        }
    }


};
console.log(rotate(
    [
        [1,2],
        [3,4]
    ]
));
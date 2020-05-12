/*
* 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
* */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    /*
    * 暴力法
    * */
    let result = 0
    if (matrix.length === 0) return result
    for (let i = 0; i < matrix.length; i ++){
        for (let j = 0; j < matrix[0].length; j ++) {
            if (matrix[i][j] == 1) {
                let tem = isAllOne(matrix,i,i+1,j,j+1,1)
                result = Math.max(tem,result)
            }
        }
    }
    return result
};
var isAllOne = function (matrix,i,I,j,J,tem) {
    if (I >= matrix.length || J >= matrix[0].length) return tem
    if (matrix[I][J] == 1) {
        for (let m = i;m <= I;m ++) {
            if (matrix[m][J] != 1){
                return tem
            }
        }
        for (let n = j;n <= J;n ++) {
            if (matrix[I][n] != 1){
                return tem
            }
        }
    }
    else{
        return tem
    }
    tem = (I - i + 1)*(J - j + 1)
    return isAllOne(matrix,i,I+1,j,J+1,tem)
}

let a = [
    ["0","1","1","0","0","1","0","1","0","1"],
    ["0","0","1","0","1","0","1","0","1","0"],
    ["1","0","0","0","0","1","0","1","1","0"],
    ["0","1","1","1","1","1","1","0","1","0"],
    ["0","0","1","1","1","1","1","1","1","0"],
    ["1","1","0","1","0","1","1","1","1","0"],
    ["0","0","0","1","1","0","0","0","1","0"],
    ["1","1","0","1","1","0","0","1","1","1"],
    ["0","1","0","1","1","0","1","0","1","1"]
]
console.log(maximalSquare(a));
3 - 5
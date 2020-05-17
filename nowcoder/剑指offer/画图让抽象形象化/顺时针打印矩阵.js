/*
* 题目描述：输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
* */
function printMatrix(matrix) {
    /*
    * 指针顺时针旋转
    * */
    if (matrix.length === 0) return []
    let left = 0,top = 0,right = matrix[0].length - 1,bottom = matrix.length - 1
    let i = 0,j = 0
    let result = []
    let len = matrix[0].length * matrix.length
    while (result.length < len){
        result.push(matrix[i][j])
        if (j < right && i === top) {
            j ++
        }else if (j === right && i < bottom) {
            i ++
        }else if (j > left && j <= right && i === bottom){
            j --
        } else if (j === left && i <= bottom && i > top) {
            i --
            if (i === top) {
                left ++
                top ++
                right --
                bottom --
                i ++
                j ++
            }
        }
    }
    return result
}

console.log(printMatrix(
    [
        [1,2,3,4]
    ]
));
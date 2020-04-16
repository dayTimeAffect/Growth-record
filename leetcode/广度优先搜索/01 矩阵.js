/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    /*
    * 多源广度搜索，用一个res 记录最后的返回数组
    * arr记录 0 所在的位置
    * newArr记录该次遍历更新的1的位置，同步更新 res对应位置 的 1（第几次才遍历该位置）
    * 知道最后newArr长度为0，跳出循环
    * 防止重复遍历，已经记录过的1的位置，修改为0
    * */
    let arr = []
    let res = []
    for (let i = 0;i < matrix.length; i ++) {
        res[i] = []
        for (let j = 0; j < matrix[0].length; j ++){
            if (matrix[i][j] === 0){
                arr.push([i,j])
            }
            res[i][j] = matrix[i][j]
        }
    }
    let index = 1
    while (arr.length > 0){
        let newArr = []
        for (let k = 0;k < arr.length; k ++){
            let i = arr[k][0]
            let j = arr[k][1]
            if (i > 0){
                if (matrix[i - 1][j] === 1){
                    newArr.push([i - 1,j])
                    matrix[i - 1][j] = 0
                    res[i - 1][j] = index
                }
            }
            if (i < matrix.length - 1){
                if (matrix[i + 1][j] === 1){
                    newArr.push([i + 1,j])
                    matrix[i + 1][j] = 0
                    res[i + 1][j] = index
                }
            }
            if (matrix[i][j + 1] === 1){
                newArr.push([i,j + 1])
                matrix[i][j + 1] = 0
                res[i][j + 1] = index
            }
            if (matrix[i][j - 1] === 1){
                newArr.push([i,j - 1])
                matrix[i][j - 1] = 0
                res[i][j - 1] = index
            }
        }
        arr = newArr
        index ++
    }
    return res
};
console.log(updateMatrix(
    [
        [1,0,1,1,0,0,1,0,0,1],
        [0,1,1,0,1,0,1,0,1,1],
        [0,0,1,0,1,0,0,1,0,0],
        [1,0,1,0,1,1,1,1,1,1],
        [0,1,0,1,1,0,0,0,0,1],
        [0,0,1,0,1,1,1,0,1,0],
        [0,1,0,1,0,1,0,0,1,1],
        [1,0,0,0,1,1,1,1,0,1],
        [1,1,1,1,1,1,1,1,1,0],
        [1,1,1,1,0,1,0,0,1,1]
    ]
));

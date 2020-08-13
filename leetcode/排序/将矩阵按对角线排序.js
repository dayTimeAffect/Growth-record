/*
* https://leetcode-cn.com/problems/sort-the-matrix-diagonally/
* */
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let map = {}
    for (let i = 0; i < mat.length; i ++) {
        for (let j = 0; j < mat[0].length; j ++) {
            if (map[i - j]) {
                for (let m = map[i - j].length; m >= 0; m --) {
                    map[i - j][m] = map[i - j][m - 1];
                    if (mat[i][j] >= map[i - j][m] || m === 0) {
                        map[i - j][m] = mat[i][j];
                        break
                    }
                }
            }else{
                map[i - j] = [mat[i][j]]
            }
        }
    }
    for (let i = 0; i < mat.length; i ++) {
        for (let j = 0; j < mat[0].length; j ++) {
            mat[i][j] = map[i - j].shift()
        }
    }
    return mat
};
console.log(diagonalSort([[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]));
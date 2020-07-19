/*
* https://leetcode-cn.com/problems/sort-array-by-parity-ii/
* */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let i = 0, j = 1
    while (j < A.length) {
        if (A[i] % 2 === 1 && A[j] % 2 === 0) {
            [A[i],A[j]] = [A[j],A[i]]
        }
        if (A[i] % 2 === 0) {
            i += 2
        }
        if (A[j] % 2 === 1) {
            j += 2
        }
    }
    return A
};
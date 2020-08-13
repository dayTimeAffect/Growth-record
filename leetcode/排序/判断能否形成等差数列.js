/*
* https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence/
* */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b)
    let d =  arr[1] - arr[0]
    for (let i = 1; i < arr.length; i ++) {
        if (arr[i] - arr[i - 1] !== d) return false
    }
    return true
};
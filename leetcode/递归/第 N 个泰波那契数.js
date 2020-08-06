/*
* https://leetcode-cn.com/problems/n-th-tribonacci-number/
* */
/**
 * @param {number} n
 * @return {number}
 */
//方法一
var tribonacci1 = function(n) {
    //函数递归又死于时间
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1
    return tribonacci1(n - 3) + tribonacci1(n - 2) + tribonacci1(n - 1)
};
//方法二
var map = {}
var tribonacci2 = function(n) {
    //优化递归,缓存已经存储过的值
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1
    if (map[n]) return map[n]
    else map[n] = tribonacci2(n - 3) + tribonacci2(n - 2) + tribonacci2(n - 1)
    return map[n]
};
//方法三
var tribonacci = function(n) {
    // 多香的做法啊
    let res = [0, 1, 1]
    for (let i = 3; i <= n; i ++){
        res[i] = res[i - 3] + res[i - 2] + res[i - 1]
    }
    return res[n]
};

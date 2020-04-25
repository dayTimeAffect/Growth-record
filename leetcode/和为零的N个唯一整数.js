/*
* 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。
* */
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = []
    let tem = Math.floor(n / 2)
    for (let i = 1;i < tem; i ++) {
        res.push(i,-i)
    }
    if (tem !== n / 2) {
        res.push(n + 1,n - 1, -2*n)
    }else{
        res.push(tem,-tem)
    }
};
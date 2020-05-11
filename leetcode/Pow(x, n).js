/*
* 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
* */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x === 0) return 0
    if (n < 0) {x = 1 / x;n = Math.abs(n)}
    if (n === 0) return 1
    if (n === 1) return x
    let index = 1
    let result = 1
    let tem = x
    while (n > 1) {
        if (index * 2 >= n) {
            n -= index
            index = 1
            result = tem * result
            tem = x
        }else{
            tem = tem * tem
            index *= 2
        }
    }
    result *= x
    return result
};
console.log(myPow(2.1,10));
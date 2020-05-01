/*
* 请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
* */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    /*
    * 右移运算符
    * “>>”运算符执行有符号右移位运算
    * “>>>”运算符执行五符号右移位运算
    * */
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
};
console.log(hammingWeight(11111111111111111111111111111101));
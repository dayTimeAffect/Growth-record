/*
* 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
* 1 <= n <= 10^5
* */
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    /*
    * 转换成字符串处理每一位
    * */
    let str = String(n)
    let add = Number(str[0])
    let mui = Number(str[0])
    for (let i = 1;i < str.length; i ++) {
        mui *= Number(str[i])
        add += Number(str[i])
    }
    return mui - add
};
console.log(subtractProductAndSum(4421));
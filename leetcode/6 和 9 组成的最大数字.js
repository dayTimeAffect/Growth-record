/*
* 给你一个仅由数字 6 和 9 组成的正整数 num。

你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。

请返回你可以得到的最大数字。
* */
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    //转为字符串->数组处理
    let numArr = String(num).split('')
    for (let i = 0; i < numArr.length;i ++) {
        if (numArr[i] === '6') {
            numArr[i] = '9'
            break;
        }
    }
    return Number(numArr.join(''))
};
console.log(maximum69Number(9699));
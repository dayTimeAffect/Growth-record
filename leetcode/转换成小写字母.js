/*
* 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
* */
/*
* 位运算小知识：所有小写字母的 ASCII 码的二进制第六位（从右向左）都是 1 ，而对应的大写字母第六位为 0 ，其他位都一样。 所以转换为小写，只需字符的 ASCII 码的第六位变为 1
* ，即与 0b00100000 （32）做与运算，转换为大写即与0b11011111（-33）做或运算
* 大写变小写、小写变大写 : 字符 ^= 32;
* 大写变小写、小写变小写 : 字符 |= 32;
* 小写变大写、大写变大写 : 字符 &= -33;
* */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let temArr = str.split('')
    for (let i = 0; i < temArr.length; i ++) {
        if (temArr[i].codePointAt(0) >= 65 && temArr[i].codePointAt(0) <= 90) {
            temArr[i] = String.fromCodePoint(temArr[i].codePointAt(0) + 32)
        }
    }
    return temArr.join('')
};
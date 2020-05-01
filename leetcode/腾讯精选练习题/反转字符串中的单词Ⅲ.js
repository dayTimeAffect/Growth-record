/*
* 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
* */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //方法一：库函数
    let temArr = s.split(" ")
    for (let i = 0;i < temArr.length;i ++) {
        temArr[i] = (temArr[i].split('').reverse()).join('')
    }
    let result = temArr.join(' ')
   return result
};
var reverseWords_1 = function(s) {
    //方法二：用栈存储每个单词，遇到空格，清空栈
    let tem = []
    let result = ''
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === ' '){
            while (tem.length > 0) {
                result += tem.pop()
            }
            result += s[i]
        } else {
            tem.push(s[i])
        }
    }
    while (tem.length > 0) {
        result += tem.pop()
    }
    return result
};

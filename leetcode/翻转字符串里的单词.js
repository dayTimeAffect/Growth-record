/*
* 给定一个字符串，逐个翻转字符串中的每个单词。
* */
/**
 * @param {string} s
 * @return {string}
 */
/*var reverseWords = function(s) {
    /!*
    * 方法一：单指针遍历一遍
    * 方法二：双指针好像和单指针区别不大？？ 用i,j分别记录一个单词的开始和结尾，似乎需要更大的内存存变量
    * *!/
    let res = ''
    let tem = ''
    for (let i = 0; i <= s.length; i ++) {
        if (s[i] === ' ' || i === s.length){
            if (tem.length > 0) {
                res = res.length > 0 ? tem + ' ' + res : tem
                tem = ''
            }
        } else{
            tem += s[i]
        }
    }
    return res
};*/
var reverseWords = function(s) {
    /*
    * 方法三：APi来一遍
    * */
    let reg = /\s+/g
    s = s.replace(reg,' ')
    let res = s.split(' ')
    res = res.reverse()
    if (res[0] === ''){
        res.shift()
    }
    if (res[res.length - 1] === ''){
        res.pop()
    }
    res = res.join(' ')
    return res

};
console.log(reverseWords(
    "   the sky    is blue "
));
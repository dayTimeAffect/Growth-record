/*
* 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。

* 如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。

* 如果不存在最后一个单词，请返回 0 。

* 说明：一个单词是指仅由字母组成、不包含任何空格的 最大子字符串。

* */
/*
* 输入: "Hello World"
* 输出: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = 0
    if (s.search(/[A-z]/i) == -1){ // 去除s只有空格的情况
        return res
    }else{
        let s_arr = s.replace(/[ ]{2,}/g,' ').split(' ')  //多个空格在一起，处理数据
        if(s_arr.length == 1){ // 去除只有字母的情况
            res = s_arr[0].length
        }else{
            res = s_arr.pop()
            res == '' ? res = s_arr.pop().length : res = res.length
        }

        return res
    }
};
/*
* 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

注意：每次拼写时，chars 中的每个字母都只能用一次。

返回词汇表 words 中你掌握的所有单词的 长度之和。
* */
/*
* 输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6
解释：
可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
* */

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let res = 0
    let tem;
    for (let value of words) {
        tem = chars.split('')
        if (value.length <= tem.length) {
            for (let i = 0;i < value.length;i++){
                if (tem.indexOf(value[i]) == -1) {
                    break;
                }else{
                    if (i == value.length - 1) {
                        res += value.length
                    }
                    tem.splice(tem.indexOf(value[i]),1)
                }
            }
        }
    }
    return res
};
console.log(countCharacters(["hello","world","leetcode"], 'welldonehoneyr'));
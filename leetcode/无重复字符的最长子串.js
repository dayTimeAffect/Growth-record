/*
* 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
* */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let tem = s.split('')
    let maxLen = 0
    let arr = []
    for (let i = 0; i < tem.length;i ++) {
        if (arr.indexOf(tem[i]) !== -1) {
            arr.splice(0,arr.indexOf(tem[i]) + 1)
        }
        arr.push(tem[i])
        maxLen = Math.max(maxLen,arr.length)
    }
    return maxLen
};
console.log(lengthOfLongestSubstring('pwwkew'));
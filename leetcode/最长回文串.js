/*
* 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。
*/
/*
* 输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
* */

/**
 * @param {string} s
 * @return {number}
 */
/*var longestPalindrome = function(s) {
    /!*
    * 思路：回文肯定是对称的，所有哈希表中所有大于等于2的字母取最大的偶数个就能构成回文，但是如果此时结果长度小于s,那么就可以在中间加任何一个字母
    * *!/
    if (s.length <= 1) return s.length
    let res = 0
    let sObj = {}
    for (let i = 0;i < s.length;i++) {
        if (sObj[s[i]]) {
            sObj[s[i]] ++
        }else{
            sObj[s[i]] = 1
        }
    }
    for (let key in sObj) {
        if (sObj[key] >= 2) {
            res += sObj[key]
            if (sObj[key] % 2 != 0) {
                res --
            }
        }
    }
    if (res < s.length) res ++
    return res

};*/
var longestPalindrome = function(s) {
    /*
    * 看了评论再优化，set数据结构中的值是唯一的
    * */
    let set = new Set();
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(set.has(s[i])){
            count +=2;
            set.delete(s[i])
        }else{
            set.add(s[i])
        }
    }
    return set.size>0 ? count+1 : count;
};
console.log(longestPalindrome("abccccdd"));


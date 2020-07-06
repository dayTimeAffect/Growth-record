/*
* https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
* */

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let len = S.length - 1
    let res = []
    while (len >= 0) {
        let resLen = res.length - 1
        if (resLen >= 0 && S[len] === res[resLen]) {
            res.pop()
        }else{
            res.push(S[len])
        }
        len --

    }
    res.reverse()
    return res.join('')
};
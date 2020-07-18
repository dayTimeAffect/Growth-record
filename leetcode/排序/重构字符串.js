/*
* https://leetcode-cn.com/problems/reorganize-string/
* */

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let S_map = {}
    let maxRepeat = 0
    let maxRepeatL = ''
    let res = []
    for (let i = 0; i < S.length; i ++) {
        if (S_map[S[i]]) {
            S_map[S[i]] ++
        }else{
            S_map[S[i]] = 1
        }
        if (S_map[S[i]] > maxRepeat) {
            maxRepeat = S_map[S[i]]
            maxRepeatL = S[i]
        }
    }
    if (maxRepeat <= Math.ceil(S.length / 2)) {
        let tem = []
        for (let key in S_map) {
            tem.push(new Array(S_map[key]).fill(key).join(''))
        }
        tem.sort((a,b ) => b.length - a.length)
        tem = tem.join('').split('')
        let i = 1  //先填奇数坑，再填偶数坑
        res = new Array(tem.length)
        while (tem.length > 0) {
            res[i] = tem.pop()
            i += 2
            if (i >= res.length) i = 0
        }
    }
    return res.join('')
};
console.log(reorganizeString("aab"));
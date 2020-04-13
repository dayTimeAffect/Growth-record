/*
* 给你一个字符串 s ，请你根据下面的算法重新构造字符串：

从 s 中选出 最小 的字符，将它 接在 结果字符串的后面。
从 s 剩余字符中选出 最小 的字符，且该字符比上一个添加的字符大，将它 接在 结果字符串后面。
重复步骤 2 ，直到你没法从 s 中选择字符。
从 s 中选出 最大 的字符，将它 接在 结果字符串的后面。
从 s 剩余字符中选出 最大 的字符，且该字符比上一个添加的字符小，将它 接在 结果字符串后面。
重复步骤 5 ，直到你没法从 s 中选择字符。
重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。
在任何一步中，如果最小或者最大字符不止一个 ，你可以选择其中任意一个，并将其添加到结果字符串。

请你返回将 s 中字符重新排序后的 结果字符串 。
* */
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    /*
    * 太乱了，没思路，纯模拟
    * */
    let obj = {}
    let arr = []
    let res = ''
    for (let i = 0;i < s.length; i ++) {
        if (obj[s[i].charCodeAt()]) {
            obj[s[i].charCodeAt()] ++
        }else{
            obj[s[i].charCodeAt()] = 1
            arr.push(s[i].charCodeAt())
        }
    }
    if (arr.length <= 1){
        return s
    }
    arr.sort((a,b) => a - b)
    let len = s.length
    let i = 0
    let increase = true
    while (len > 0) {
        len --
        while (obj[arr[i]] === 0) {
            if (i === 0){
                increase ? i ++ : increase = !increase
            } else if (i === arr.length - 1) {
                increase ? increase = !increase : i --
            }else{
                increase ? i ++ : i--
            }
        }
        obj[arr[i]] --
        res += (String.fromCharCode(arr[i]))
        if (i === 0){
            increase ? i ++ : increase = !increase
        } else if (i === arr.length - 1) {
            increase ? increase = !increase : i --
        }else{
            increase ? i ++ : i--
        }
    }
    return res
};
console.log(sortString('leetcode'));
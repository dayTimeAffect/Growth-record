/*
* 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。
* 若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。
* */
/*
 输入："aabcccccaaa"
 输出："a2b1c5a3"
* */
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    /*
    * 思路：一次遍历，两个指针，i不动，j动。每次循环都判断一次是否变短，如果已经变长了，那就已经没有循环完的必要了
    * */
    if (S.length <= 1) return S
    let res = ''
    let num = 1
    for (let i = 0,j = i + 1;i < S.length;j++) {
        if (S[i] == S[j]) {
            num ++
        }else{
            res += S[i] + num
            if (res.length > S.length) {
                return S
            }
            i = j
            num = 1
        }
    }
    return res

};
console.log(compressString('abbccd'));
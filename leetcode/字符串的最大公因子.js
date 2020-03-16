/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
/*
*   1 <= str1.length <= 1000
    1 <= str2.length <= 1000
    str1[i] 和 str2[i] 为大写英文字母
*/
/*var gcdOfStrings = function(str1, str2) {
    /!*
    * 找出长度公因子，从大到小匹配
    * *!/
    let res = ""
    let str1Len = str1.length
    let str2Len = str2.length
    let gcdArr = []
    let index = 1
    while (index <= str1Len && index <= str2Len) {
        if (str1Len % index == 0 && str2Len % index == 0) {
            gcdArr.push(index)
        }
        index ++
    }
    for (let i = gcdArr.length - 1;i>=0;i--) {
        let gcd = str1.slice(0,gcdArr[i])
        if (str1.replace(new RegExp(gcd,'gm'),'') == '' && str2.replace(new RegExp(gcd,'gm'),'') == '') {
            res = gcd
            break;
        }
    }
    return res
};*/
/*var gcdOfStrings = function(str1, str2) {
    /!*
    * 优化
    * 从大到小找公因子，查询是否满足条件
    * *!/
    let res = ""
    if(str1 + str2 != str2 + str1){
        return res
    }
    let str1Len = str1.length
    let str2Len = str2.length
    let index = str1Len > str2Len ? str2Len : str1Len
    while (index >= 1) {
        console.log(str1Len,str2Len,index);
        if (str1Len % index == 0 && str2Len % index == 0) {
            res = str1.slice(0,index)
            break;
        }
        index --
    }
    return res
};*/
var gcdOfStrings = function(str1, str2) {
    /*
    * 看了题解优化
    * 有公因子必然有str1 + str2 == str2 + str1
    * */
    let res = ""
    if(str1 + str2 == str2 + str1){
        let str1Len = str1.length
        let str2Len = str2.length
        while (str2Len >= 1) {
            if (str1Len % str2Len == 0) {
                res = str1.slice(0,str2Len)
                break;
            }
            [str1Len,str2Len] = [str2Len,str1Len % str2Len]
        }
    }
    return res
};
/*欧几里得算法求最大公约数*/
function gcd(a, b) {
    if (a % b == 0) return b;
    return gcd(b, a % b);
}
console.log(gcdOfStrings("ABCABCABC","ABCABC"));
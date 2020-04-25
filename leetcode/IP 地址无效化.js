/*
*
给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。
输入：address = "1.1.1.1"
输出："1[.]1[.]1[.]1"
* */
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    //简单的正则替换
    let result = ''
    let reg = /[.]/g
    result = address.replace(reg,'[.]')
    return result
};
console.log(defangIPaddr('1.1.1.1'));
/*
* 题目描述：输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。0
* */
function NumberOf1(n) {
    /*
    * 右移运算符
    * “>>”运算符执行有符号右移位运算
    * “>>>”运算符执行无符号右移位运
    * &运算符，比较二进制中对应位是否都为1，如果都为1，结果中该位也为1
    * */
    let result = 0
    while (n !== 0) {
        if ((n & 1) > 0){
            result ++
        }
        n = n >>> 1
    }
    return result
}
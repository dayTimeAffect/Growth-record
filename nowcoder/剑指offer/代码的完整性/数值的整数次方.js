/*
* 题目描述：给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。保证base和exponent不同时为0
* */
/*
* 就是实现Math.Pow(x,n),为了保证时间限制，不能for循环O(n)
* 考虑有记录的二分法(防止重复计算)
* */
function Power(base, exponent) {
    if(base === 0) return 0
    if (exponent < 0) {base = 1 / base;exponent = Math.abs(exponent)}
    if (exponent === 0) return 1
    if (exponent === 1) return base
    let index = 1
    let result = 1
    let tem = base
    while (exponent > 1) {
        if (index * 2 >= exponent) {
            exponent -= index
            index = 1
            result = tem * result
            tem = base
        }else{
            tem = tem * tem
            index *= 2
        }
    }
    result *= base
    return result
}
/*
* 欧几里得算法又称辗转相除法
* 一般用于求两个数的最大公约数
* 定理：两个整数的最大公约数等于其中较小的那个数和两数相除余数的最大公约数也就是gcd(a,b) = gcd(b,a mod b)
* */

let gcd = function (number1,number2) {
    if (number1 % number2 == 0) {
        return number2
    }else{
        return gcd(number2,number1 % number2)
    }
}
console.log(gcd(25, 15));
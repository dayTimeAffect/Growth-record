/*
* 题目描述：大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。n<=39
* */
function Fibonacci(n) {
    //递归 --- 因为大量的重复计算，会超时
    if (n < 2) return n
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}
function Fibonacci(n) {
    //循环
    let arr = [0,1]
    let index = 2
    while (index <= n){
        arr[index] = arr[index - 1] + arr[index - 2]
        index ++
    }
    return arr[n]
}
console.log(Fibonacci(7));
/*
* 0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。
* */
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
/*var lastRemaining = function(n, m) {
    /!*
    * 暴力法，找到每一步删除元素的下标，删除
    * *!/
    let nArr = new Array()
    for (let i = 0;i < n;i++) {
        nArr.push(i)
    }
    let tem = 0
    while (nArr.length > 1) {
        tem = tem == -1 ? 0 : tem
        if (m + tem > nArr.length) {
            tem = (m + tem) % nArr.length - 1
        }else{
            tem = tem + m - 1
        }
        console.log(nArr,tem);
        nArr.splice(tem,1)
    }
    return nArr[0]
};*/
var lastRemaining = function(n, m) {
    /*
    * 最后留下元素的下标肯定为0，倒推每一步中该元素的下标
    * 我们知道，从 f(n - m) 场景下删除的第一个数的序号是 (m - 1) % n，那么 f(n - 1, m) 场景将使用被删除数字的下一个数，即序号 m % n 作为它的 0 序号。
    * 设 f(n - 1, m) 的结果为 x，x 是从 f(n, m) 场景下序号为 m % n 的数字出发所获得的结果，因此，我们可以得出：m % n + x 是该数字在 f (n, m) 场景下的结果序号。即：
    * f(n, m) = m % n + x  但由于 m % n + x 可能会超过 n 的范围，所以我们再取一次模：
    * f(n , m) = (m % n + x) % n = (m + x) % n
    * 所以f(n, m) = (m + f(n - 1, m)) % n
    * */
    let tem = 0
    for (let i = 2; i <= n; i ++) {
        tem = (m + tem) % i
    }
    return tem
};
console.log(lastRemaining(5,3));


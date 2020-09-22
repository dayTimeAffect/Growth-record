/*
* https://leetcode-cn.com/problems/unique-paths/
* */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //因为机器人只能向左走m-1，向下走n-1，所以高中全排列知识，m个红球,n个白球有多少种排列方式，所以Cmn

    /*const factorial = target =>{
        if (target === 0) return 1
        return target * factorial(target - 1)
    }
    return (factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1)))*/

    //利用缓存，避免重复计算
    const cache = [1]
    for (let i = 1; i <= m + n - 2; i ++){
        cache[i] = cache[i - 1] * i
    }
    return (cache[m + n - 2] / (cache[m - 1] * cache[n - 1]))
};
console.log(uniquePaths(7, 3));
/*
* 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

返回使 A 中的每个值都是唯一的最少操作次数。
输入：[3,2,1,2,1,7]
输出：6
解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。

* */
/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let res = 0,rate = 0
    let objA = {}
    let index = 0,min = 0
    for (let i = 0;i < A.length;i++) {
        min = min > A[i] ? A[i] : min
        if (objA[A[i]]) {
            objA[A[i]]++
            index ++
        }else{
            objA[A[i]] = 1
        }
    }
    for (let i = min;i < 80000 && index > 0;i++) {
        if (objA[i] >= 2) {
            res -= (objA[i] - 1) * i
            rate += objA[i] - 1
        }else if (objA[i] != 1 && rate > 0) {
            res += i
            rate --
            index --

        }
    }
    return res
};
console.log(minIncrementForUnique([3,2,1,2,1,7]));

/*var minIncrementForUnique = function(A) {
    /!*
    * 思路：暴力法，记录A[i]出现得个数，若有重复的，加上去
    * *!/

    let res = 0
    let tem
    let obj = {}
    for (let i = 0;i < A.length;i++){
        while (obj[A[i]]) {
            tem = obj[A[i]]
            obj[A[i]] ++
            res += tem
            A[i] += tem
        }
        obj[A[i]] = 1
    }
    return res
};*/
/*var minIncrementForUnique = function(A) {
    /!*
    * 优化暴力法：再记录上一个重复的相同数字循环了多少次才找到没有重复的数，相当于是 这次的重复数遍历的起点是 = 重复个数 + 上一个重复数遍历的次数（递增了多少次）
    * *!/
    let res = 0
    let tem
    let index = 0
    let obj = {}
    for (let i = 0;i < A.length;i++){
        let j = A[i]
        index = 0
        while (obj[A[i]]) {
            tem = obj[A[i]]
            obj[A[i]] ++
            res += tem
            A[i] += tem
            index ++
        }
        obj[A[i]] = 1
        index ? index -- : index
        obj[j] += index
    }
    return res
};*/

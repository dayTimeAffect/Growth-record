/*
* 给你一个整数数组 nums 和一个整数 k。
* 如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。
* 请返回这个数组中「优美子数组」的数目。
* */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    /*
    * 优美子数组:某个 连续 子数组
    * 因为是连续的。
    * 我们可以用arr记录所有奇数的下标。比如k为3，那么在
    * 0 其他值 （arr[0] - arr[2]）  其他值 arr[3]   所以nums下标0到arr[0]，arr[2]到arr[3]之间的数组保持连续组合
    * 依次类推即可
    * */
    let res = 0;
    let temArr = []
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] % 2 === 1) {
            temArr.push(i)
        }
    }
    if (temArr.length < k) return 0
    else{
        let index = 0
        while (index + k <= temArr.length) {
            let left = temArr[index] - (temArr[index - 1] === undefined ? -1 : temArr[index - 1]) - 1
            let right = (temArr[index + k] === undefined ? nums.length : temArr[index + k]) - temArr[index + k - 1] - 1
            res += 1 + left + right + left * right
            index ++
        }
    }
    return res
};
console.log(numberOfSubarrays([1,1,2,1,1],3));
/*
* 给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    /*
    * 转成字符串判断
    * */
    let res = 0
    for (let i = 0;i < nums.length; i ++) {
        if (String(nums[i]).length % 2 === 0){
            res ++
        }
    }
    return res
};
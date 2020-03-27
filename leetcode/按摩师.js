/*
* 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。
* 给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟
* 输入： [1,2,3,1]
  输出： 4
  解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    /*
    * 思路：当前天数的最优解，因为不能连续工作，所有比较前一天的最优解与前两天+今天的时间，取大值
    * */
    let dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(dp[0],nums[1])
    let i = 2
    while (i < nums.length) {
        dp[i] = Math.max(dp[i - 1],dp[i - 2] + nums[i])
        i ++
    }
    return dp[nums.length - 1]
};
console.log(massage([2,7,9,3,1]));
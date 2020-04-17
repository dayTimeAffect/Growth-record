/*
* 给定一个非负整数数组，你最初位于数组的第一个位置。
* 数组中的每个元素代表你在该位置可以跳跃的最大长度。
* 判断你是否能够到达最后一个位置。
* */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    /*
    * 动态规划
    * dp[i]记录nums中i位置最大还能往后走几步
    * dp[i - 1] 大于1,那么它才能跳跃到 i,跳跃到 i,那么此时dp[i] = Math.max(dp[i - 1] - 1;,nums[i])
    * */
    let dp = []
    dp[0] = nums[0]
    for (let i = 1;i < nums.length;i ++) {
        if (dp[i - 1] >= 1) {
            dp[i] = Math.max(dp[i - 1] - 1,nums[i])
        }else{
            dp[i] = -1
        }
    }
    return (dp[nums.length - 1] !== -1)
};
console.log(canJump(
    [3,2,1,0,4,5,6]
));
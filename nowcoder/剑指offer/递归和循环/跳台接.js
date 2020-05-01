/*
* 题目描述：一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
* */
function jumpFloor(number) {
    /*
    * 动态规划：dp[i] 表示青蛙跳i级台阶有dp[i]种跳法
    * 所以：dp[i] = dp[i - 1] + dp[i - 2]
    * */
    let dp = [0,1,2]
    for (let i = 3; i <= number; i ++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[number]
}
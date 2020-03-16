/*
* 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
* */

/*
* 输入: coins = [1, 2, 5], amount = 11
  输出: 3
  解释: 11 = 5 + 5 + 1
* */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    /*
    * 由小到大，遍历到amount最优解
    * dfs[i]表示，当前的目标金额是i,至少需要dfs[i]个硬币
    * */
    let dfs = new Array(amount + 1).fill(Infinity) //创建一个存储结果的数组
    dfs[0] = 0 // 第一项

    for (let coin of coins) {
        for (let i = 0; i <= amount; i++) {
            if (i >= coin){ //i < coin不可能形成组合
                dfs[i] = Math.min(dfs[i], dfs[i - coin] + 1)
            }
        }
    }
    return dfs[amount] === Infinity ? -1 : dfs[amount]
};




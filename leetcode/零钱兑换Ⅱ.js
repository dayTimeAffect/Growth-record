
/*
* 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。
* */

/*
* 输入: amount = 5, coins = [1, 2, 5]
输出: 4
解释: 有四种方式可以凑成总金额:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
* */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    /*
    * 由小到大，遍历到amount最优解
    * dfs[i]表示，当前的目标金额是i,至少需要dfs[i]个硬币
    * */
    let dfs = new Array(amount + 1).fill(Infinity) //创建一个存储结果的数组
    let dfsSum = new Array(amount + 1).fill(0)
    dfs[0] = 0 // 第一项

    for (let coin of coins) {
        for (let i = 0; i <= amount; i++) {
            if (i >= coin){ //i < coin不可能形成组合
                if (dfs[i - coin] != Infinity) {
                    dfs[i] = dfs[i - coin] + 1
                    dfsSum[i] += (dfsSum[i - coin] || 1)
                }

            }
        }
    }
    return dfsSum[amount]
};
console.log(change(5, [1,2,5]));


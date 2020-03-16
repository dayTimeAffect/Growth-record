/*
* 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。
* */

/*
* 输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
* */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
    if (prices.length < 2) return 0
    let i = 0,j = i + 1
    let maxDiff = 0
    while (j < prices.length) {
        if (prices[i] > prices[j]){
            i = j
        }else{
            /*if (maxDiff < prices[j] - prices[i] ) {
                maxDiff = prices[j] - prices[i]
            }*/
            maxDiff = Math.min(maxDiff,prices[j] - prices[i])
        }
        j++;

    }
    return maxDiff
};

console.log(maxProfit([7,6,4,3,1]));
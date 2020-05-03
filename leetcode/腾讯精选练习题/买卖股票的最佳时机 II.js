/*
* 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
* 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
* 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
* */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0
    let result = 0
    let currMin = prices[0]
    prices.push(-Infinity)
    for (let i = 1; i < prices.length; i ++) {
        if (prices[i] < prices[i - 1]) {
            result += prices[i - 1] - currMin
            currMin = prices[i]
        }else{
            currMin = Math.min(currMin,prices[i - 1])
        }
    }
    return result
};
console.log(maxProfit([1,2,1,4,5,6]));
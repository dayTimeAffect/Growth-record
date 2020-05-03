/*
* 题目描述我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
* 比如n=3时，2*3的矩形块有3种覆盖方法：
* */
function rectCover(number) {
    /*
    * 因为一个小矩形有两种放的方式，横着和竖着，竖着放占一个空间，横着放必须用两个小矩形才能填充满
    * */
    let dp = [0,1,2,3]
    for (let i = 4; i <= number; i ++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[number]
}
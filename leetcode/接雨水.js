/*
*
* 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
* 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
* 输出: 6
* 题42
* */
/**
 * @param {number[]} height
 * @return {number}
 */
/*var trap = function(height) {
    /!*
    * 思路：先找到最大值，然后左边从左到右，右边从右到左扫描
    * 默认左边第一个数是左边的最大值，右边的第一个数是右边的最大值，那么 左边第一个数到最大值的面积(总格子数) - 其他位置的数和 = 可以装水的格子数   右边同理
    * 假如从左边开始往最大值扫描找到了比左边默认的最大值还大的数，那么为了避免重复计算，只需要 （当前找到的左最大值 - 上一次找到的左最大值） * 左最大值到最大值距离   右边同理
    * 比如[1,0,2,0,3,0,1]
    * 就相当于 除了中间的空隙能装水，每个数字也能装水，那么装的水就是[1,1,2,2,3,1,1]
    * 所以两个数组和相减
    * *!/
    if (height.length <= 2){
        return 0
    }
    let maxIndex = 0
    let count = 0
    for (let i = 0;i < height.length; i ++) {
        height[i] > height[maxIndex] ? maxIndex = i : ''
        count += height[i]
    }
    let leftMax = 0
    let rigthtMax = 0
    let res = height[maxIndex]
    for (let i = 0; i < maxIndex; i ++) {
        if (height[i] > leftMax) {
            res += (height[i] - leftMax) * (maxIndex - i)
            leftMax = height[i]
        }
    }
    for (let j = height.length - 1;j > maxIndex; j --){
        if (height[j] > rigthtMax) {
            res += (height[j] - rigthtMax) * (j - maxIndex)
            rigthtMax = height[j]
        }
    }
    res = res - count
    return res
};*/
var trap = function(height) {
    /*
    * 对上一个解法进行优化：先找到最大值，然后左边从左到右，右边从右到左扫描
    * 目的：
    * 将[1,0,2,0,3,0,1]变成[1,1,2,2,3,1,1]
    *
    * 所以两个数组和相减
    * */
    if (height.length <= 2){
        return 0
    }
    let maxIndex = 0
    let res = 0
    for (let i = 0;i < height.length; i ++) {
        maxIndex = height[i] > height[maxIndex] ? i : maxIndex
        res -= height[i]
    }
    res += height[maxIndex]
    let i = 0,j = height.length - 1
    while (i < maxIndex || j > maxIndex) {
        if (i < maxIndex){
            height[i] = height[i] < height[i - 1] ? height[i - 1] : height[i]
            res += height[i]
            i ++;
        }
        if (j > maxIndex) {
            height[j] = height[j] < height[j + 1] ? height[j + 1] : height[j]
            res += height[j]
            j --;
        }
    }
    return res
};
console.log(trap(
    [4,2,3]
));
//[0,1,0,2,1,0,1,3,2,1,2,1]
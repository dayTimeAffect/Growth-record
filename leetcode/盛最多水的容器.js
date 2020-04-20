/*
* 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，
* 使得它们与 x 轴共同构成的容器可以容纳最多的水。
* 说明：你不能倾斜容器，且 n 的值至少为 2。
* */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    /*
    * 简单暴力法
    * */
    let max = 0
    for (let i = 0;i < height.length - 1; i ++) {
        for (let j = i + 1;j < height.length; j ++){
            let tem = (j - i) * Math.min(height[i],height[j])
            if (max < tem) {
                max = tem
            }
        }
    }
    return max

};
var maxArea_new = function(height) {
    /*
    * 双指针，每次判断两个指针指向的位置谁更小，谁小谁移动
    * 原理  面积等于 长 * 宽 这里的长为两个指针之间的距离  宽为两个位置高度的最小值
    * 当不论哪个指针移动，长必定减一， 如果值更大位置的指针移动，那么必然会越来越小，面积比不可能变大
    * 而值更小的指针移动，才有可能寻找到更大高使面积更大
    * */
    let max = 0
    let i = 0
    let j = height.length - 1
    while (i < j){
        let tem = (j - i) * Math.min(height[i],height[j])
        if (max < tem){
            max = tem
        }
        height[i] < height[j] ? i ++ : j --
    }
    return max

};
console.log(maxArea_new([1, 8, 6, 2, 5, 4, 8, 3, 7]));
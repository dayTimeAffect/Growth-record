/*
* 给定一个非负整数数组，你最初位于数组的第一个位置。
* 数组中的每个元素代表你在该位置可以跳跃的最大长度。
* 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let result = 0
    let len = nums.length - 1
    while (len > 0) {
        let tem = len - 1
        let index = len - 1
        for (let i = 0; i <= index; i ++) {
            if (nums[i] + i >= len){
                tem = i
                break;
            }
        }
        len = tem
        result ++
    }
    return result
};
console.log(jump([2, 3, 1, 1, 4]));
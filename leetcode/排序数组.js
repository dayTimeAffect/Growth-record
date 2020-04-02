/*
* 给定一个整数数组 nums，将该数组升序排列。
*
* */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    nums.sort((a,b) => a - b)

    return nums
};
console.log(sortArray(
    [5,1,1,2,0,0]
));
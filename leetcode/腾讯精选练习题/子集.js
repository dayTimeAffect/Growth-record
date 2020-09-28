/*
* 子集
* https://leetcode-cn.com/problems/subsets/
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]]
    for (let i = nums.length - 1; i >= 0; i--){
        const nextPush = []
        result.forEach(v => nextPush.push([nums[i], ...v]))
        result = [...nextPush, ...result]
    }
    return result
};
console.log(subsets([1, 2, 3]));
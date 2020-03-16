/*
* 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

输入: [2,2,1,1,1,2,2]
输出: 2
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
/*var majorityElement = function(nums) {
    /!*
    * 建立哈希表
    * *!/
    if (nums.length == 1) return nums[0]
    let len = nums.length
    let numObj = {}
    for (let i = 0;i < len;i ++) {
        if (numObj[nums[i]]) {
            numObj[nums[i]] ++
            if (numObj[nums[i]] > len /2) {
                return nums[i]
            }
        }else{
            numObj[nums[i]] = 1
        }
    }
};*/
var majorityElement = function(nums) {
    /*
    * 看了题解优化：
    * 摩尔投票法：
    * 记录一个count,遇到相同的+1，不同的-1
    * 可以理解成不同数字的大混战，最好的情况下其他数字同归于尽，最后才记录到众数，最差就是众数和其他所有数字消耗，但因为次数大于 ⌊ n/2 ⌋ ，所以最后一定会剩下一个众数
    * */
    let count = 0
    let num = nums[0]
    for (let i = 0;i < nums.length;i++) {
        if (num == nums[i]) {
            count++
        }else{
            count --
            if (count == 0){
                num = nums[i + 1]
            }
        }
    }
    return num

};
console.log(majorityElement([3,2,3]));
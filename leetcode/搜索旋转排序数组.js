/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length < 3) return nums.indexOf(target)
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (target < nums[0] && target > nums[mid]) {
            left = mid + 1
        }
        else if (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])){
            left = mid + 1
        }else{
            right = mid;
        }
        
    }
    return left === right && nums[left]==target ? left : -1;
};
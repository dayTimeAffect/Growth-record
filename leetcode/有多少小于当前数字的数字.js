/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    /*
    * 不排序了，还要去重，其实更麻烦
    * 或者排序，然后用indexOf查找下标  那么时间来说 nlogn + n  也差不多
    * */
    let arr = []
    for (let i = 0;i<nums.length;i++) {
        let count = 0
        for (let j = 0;j <nums.length;j++){
            if (nums[i] > nums[j]) {
                count ++
            }
        }
        arr.push(count)
    }
    return arr
};
console.log(smallerNumbersThanCurrent(
    [4,0,1,1,3]
));
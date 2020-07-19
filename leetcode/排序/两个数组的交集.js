/*
* https://leetcode-cn.com/problems/intersection-of-two-arrays/
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    /*//方法一
    let res = new Set()
    for (let val of nums1){
        nums2.includes(val) && res.add(val)
    }
    return Array.from(res)*/
    //方法二，双指针加排序
    nums1.sort((a,b) => a - b)
    nums2.sort((a,b) => a - b)
    let res = new Set()
    let i = 0, j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) i ++
        else if (nums1[i] > nums2[j]) j ++
        else {
            res.add(nums1[i])
            i ++
            j ++
        }
    }
    return Array.from(res)
};
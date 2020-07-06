/*
* 给定两个数组，编写一个函数来计算它们的交集。
* 输入: nums1 = [1,2,2,1], nums2 = [2,2]
* 输出: [2,2]
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = []
    let tem = {}
    nums1.forEach(num => {
        tem[num] ? tem[num] ++ : tem[num] = 1
    })
    nums2.forEach(num => {
        if (tem[num]) {
            res.push(num)
            tem[num] --
        }
    })
    return res
};
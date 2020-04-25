/*
* 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    /*
    * 递归、回溯算法
    * O(n^2)  每一个数都会被遍历n次，但是重复添加的数会被跳过
    * */
    let res = []
    let perm = function (nums,tem) {
        if (tem.length === nums.length) {
            res.push([...tem])
        }
        for (let i = 0; i < nums.length; i ++){
            if (tem.indexOf(nums[i]) !== -1) continue;  //如果这一个排列已经添加过的就不用添加了
            tem.push(nums[i])//每次添加新的数进去
            perm(nums,tem)
            tem.pop()
        }
    }
    perm(nums,[])
    return res
};


console.log(permute([1, 2, 3]));
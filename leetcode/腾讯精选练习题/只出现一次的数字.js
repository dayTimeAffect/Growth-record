/*
* 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
* 异或运算：
* 交换律：a ^ b ^ c <=> a ^ c ^ b
* 任何数于0异或为任何数 0 ^ n => n
* 相同的数异或为0: n ^ n => 0
* 进阶题：数组中数字出现的次数
* */
var singleNumber = function(nums) {
    let res = 0
    for (let i = 0;i < nums.length; i ++) {
        res ^= nums[i]
    }
    return res
};
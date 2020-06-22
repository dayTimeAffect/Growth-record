/*
* 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
* */
/*
* 输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
* */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []

    let helper = function (start, pre) {
        let len = pre.length
        if (len === k) {
            res.push(pre)
            return false
        }
        let rest = k - len
        for (let i = start; i <= n; i ++){
            //剪枝
            if (n - i + 1 < rest) { continue }
            let cur = pre.concat(i)
            helper(i + 1, cur)
        }
    }
    helper(1, [])

    return res
};
console.log(combine(4, 2));
/*
* 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
* */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    /*
    * 深度优先搜索算法(dfs)
    * 递归找到所有有效括号
    * */
    let res = []
    let dfs = function dfs(left,right,str) {
        if (left === 0 && right === 0) {
            res.push(str)
            return
        }
        if (left > 0) {
            dfs(left - 1,right,str + '(')
        }
        if (left < right) {
            dfs(left,right - 1,str + ')')
        }

    }
    dfs(n,n,'')
    return res
};
console.log(generateParenthesis(4));

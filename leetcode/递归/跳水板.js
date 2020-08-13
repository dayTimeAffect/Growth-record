/*
* https://leetcode-cn.com/problems/diving-board-lcci/
* */
/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard1 = function(shorter, longer, k) {
    //循环解法
    if (k === 0) return []
    if (shorter === longer) return [shorter * k]
    let res = new Array(k + 1)
    for (let i = 0; i <= k; i ++){
        res[i] = ((k - i) * shorter + i * longer)
    }
    return res
};
var divingBoard = function(shorter, longer, k) {
    //憨憨递归做法，超时，考虑剪枝
    // if (k === 0) return []
    // if (shorter === longer) return [shorter * k]
    // const rec = function (k, tem, container) {
    //     if (k === 0) {
    //         return container.push(tem)
    //     }
    //     let i = k - 1
    //     rec(i, tem + shorter, container)
    //     rec(i, tem + longer, container)
    //     return container
    // }
    // let res = rec(k, 0, [])
    // return res
    if (k === 0) return []
    if (shorter === longer) return [shorter * k]
    const rec = (k, i, container) => {
        if (i > k) return container
        container.push(i*longer + (k-i)*shorter)
        return rec(k, ++ i, container)
    }
    return rec(k, 0, [])
};
console.log(divingBoard(1, 2, 3));
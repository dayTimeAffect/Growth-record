/*
* https://leetcode-cn.com/problems/baseball-game/
* */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let resArr = []
    let res = 0
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            resArr.push((resArr[resArr.length - 2] || 0) + (resArr[resArr.length - 1] || 0))
        }else if (ops[i] === 'D') {
            resArr.push((resArr[resArr.length - 1] || 0) * 2)
        }else if (ops[i] === 'C'){
            resArr.pop()
        }else{
            resArr.push(ops[i] / 1)
        }

    }
    resArr.map(v => res += v)
    return res
};
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
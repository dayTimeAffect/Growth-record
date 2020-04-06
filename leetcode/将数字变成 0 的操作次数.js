/*
* 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。
* */
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    /*
    * 模拟操作
    * */
    let index = 0
    while (num !== 0) {
        if (num % 2 === 0) {
            num = num / 2
        }else{
            num --
        }
        index ++
    }
    return index
};
console.log(numberOfSteps(8));
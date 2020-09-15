/*
* 节流: 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
* 思路：每次触发事件时都判断当前是否有等待执行的延时函数
* */
const throttle = (func, time) => {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    const wait = +time || 500
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false;
        func.apply(this, arguments);
        setTimeout(() => {
            canRun = true;
        }, wait);
    };
}
/*
* 防抖: 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
* 思路：每次触发事件时都取消之前的延时调用方法
* */
const debounce = (func, time) => {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    const wait = +time || 500
    let timeout = null
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(arguments);
            func.apply(this, arguments);
        }, wait);
    };
}
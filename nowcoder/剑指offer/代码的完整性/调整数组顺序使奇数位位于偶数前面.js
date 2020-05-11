/*
* 题目描述：输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
* */
/*
* 一个简单的思路：两个队列分别存储奇数和偶数
* */
function reOrderArray(array) {
    //left 存奇数  right 存偶数
    let left = []
    let right = []
    for (let i = 0; i < array.length; i ++){
        if (array[i] % 2 === 0) right.push(array[i])
        else left.push(array[i])
    }
    return [...left,...right]
}
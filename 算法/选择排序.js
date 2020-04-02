/*
* 循环：每次循环都找到当前最大（最小）值，记录其索引，然后和该躺开始循环的位置进行值得交换
* O(n^2)
* */
let selectionSort = function (arr) {
    let minIndex,min
    for (let i = 0;i < arr.length - 1;i ++) {
        min = arr[i] //默认该躺起始位置为最小值
        minIndex = i
        for (let j = i + 1;j < arr.length;j ++) { // 寻找该躺的最小值
            if (arr[j] < min) {
                minIndex = j
                min = arr[j]
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]  //当前趟数找到得最小值与开始值交换
    }
    return arr
}
console.log(selectionSort([1, 5, 8, 6, 2, 4, 8, 6, 2, 9, 3, 5, 6, 4]));
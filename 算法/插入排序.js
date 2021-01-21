/*
* 从数组的第二个数据开始往前比较，即一开始用第二个数和他前面的一个比较，如果 符合条件（比前面的大或者小，自定义），则让他们交换位置。
  然后再用第三个数和第二个比较，符合则交换，但是此处还得继续往前比较，需要交换，如果不需要交换，则停止，因为前 面的数据都是有序的。
  重复一直到数据全都排完。
* */
function InsertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp){
            arr[j+1] = arr[j]
            j --
        }
        arr[j+1] = temp
    }
    return arr
}

console.log(InsertionSort([1, 3, 2, 7, 6, 5]));
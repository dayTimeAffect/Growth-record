/*
* 递归算法：
*   随便取一个基准值，将数组分为大于基准值的greater和小于基准值的less
*   那么 less + 基准值 + greater就已经相对有序了
*   继续对less、greater进行重复的操作
*   最后返回的所有小的有序的数组进行拼接，此时的数组就是个有序的数据
*   O(nlogn)
* */

let quicksort = function (arr) {
    if (arr.length < 2){
        return arr  //认为数组长度为 0 或者 1的时候是有序的
    } else{
        let tem = arr[0] //基准值
        let less = []  //小于基准值的
        let greater = [] //大于基准值的
        let Equal = [arr[0]] //等于基准值的
        for (let i = 1;i < arr.length; i ++){
            if (arr[i] < tem) {
                less.push(arr[i])
            } else if (arr[i] === tem) {
                Equal.push(arr[i])
            }else{
                greater.push(arr[i])
            }
        }
        return [...quicksort(less),...Equal,...quicksort(greater)]
    }
}

console.log(quicksort([2,5,9,4,3,6,4,1,5,9,5,3]));
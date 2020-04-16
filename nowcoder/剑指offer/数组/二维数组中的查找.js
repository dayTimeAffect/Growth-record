/*
* 题目描述：在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序
* 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
* */
// 注意关键字，顺序排序
function Find(target, array) {
    /*
    * 思路：如果存在一个数在这个每一行每一列的递增二维矩阵中
    * 那么它一定满足这一行 array[i][0] <= target && target <= array[i][length]
    * 只要满足这样条件的每行，使用查找算在该行进行查找
    * 每一行n个元素，总共又m行
    * 我使用的二分查找，所以时间复杂度：O(m*log2n)
    * 方法二对查找进行了优化
    * */
    let binary = function (target, array,index,len) {
        if (index < len){
            if (array[index] === target){
                return index
            }
            if (array[len] === target) {
                return len
            }
            let mid = Math.floor((index + len) / 2)
            if (array[mid] === target) {
                return mid
            }else if (array[mid] < target) {
                return binary(target,array,mid + 1,len)
            }else{
                return binary(target,array,0,mid - 1)
            }
        }
        return - 1
    }
    let len = array[0].length - 1
    let res = false
    for (let i = 0;i <= array.length - 1; i ++){
        if (target >= array[i][0] && target <= array[i][len]) {
            if (binary(target,array[i],0,len) !== -1) {
                res = true
                break;
            }
        }
    }
    return res
}
function Find_new(target, array) {
    /*
    * 利用JS set数据结构。快速查找
    * */
    let len = array[0].length - 1
    let res = false
    for (let i = 0;i <= array.length - 1; i ++){
        if (target >= array[i][0] && target <= array[i][len]) {
            let tem = new Set(array[i])
            if (tem.has(target)) {
                res = true
                break;
            }
        }
    }
    return res
}

console.log(Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));
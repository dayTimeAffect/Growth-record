/*
* 首先，假设表中元素是按升序排列，将表中间位置记录的关键字与查找关键字比较，如果两者相等，则查找成功；否则利用中间位置记录将表分成前、后两个子表，
* 如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，否则进一步查找后一子表。重复以上过程，
* 直到找到满足条件的记录，使查找成功，或直到子表不存在为止，此时查找不成功。
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
let binary_new = function (target, array) {
    let left = 0
    let right = array.length - 1
    while (left < right){
        let mid = (left + right) >> 1 //Math.floor((left + right) / 2)
        if (target > array[mid]) {
            left = mid + 1
        }else{
            right = mid
        }
    }
    return array[left] === target ? left : -1
}
console.log(binary_new(10, [1, 2, 3, 4, 5, 6, 8, 9]));
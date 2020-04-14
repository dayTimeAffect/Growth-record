/*
* 递归，当数组被切割成最小单元时，再归并排序
* 归并操作的工作原理如下：
* 第一步：申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
* 第二步：设定两个指针，最初位置分别为两个已经排序序列的起始位置
* 第三步：比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
* 重复步骤3直到某一指针超出序列尾
* 将另一序列剩下的所有元素直接复制到合并序列尾
* 	O(nlogn)
* */

let mergeSort = function (nums) {
    let sort = function (left,right) {
        let tem = []
        while (left.length > 0 || right.length > 0) {
            if (0 === left.length){
                tem.push(...right)
                break;
            }
            if (0 === right.length){
                tem.push(...left)
                break;
            }
            if (left[0] < right[0]){
                tem.push(left.shift())
            } else{
                tem.push(right.shift())
            }
        }
        return tem
    }
    let merge = function(nums){
        if (nums.length > 1){
            let left = merge(nums.slice(0,Math.floor(nums.length / 2)))
            let right = merge(nums.slice(Math.floor(nums.length / 2)))
            return sort(left,right)
        }else{
            return nums
        }
    }

    return merge(nums)
}
console.log(mergeSort([2, 5, 9, 4, 3, 6, 4, 1, 5, 9, 5, 3,10,95,25,36,45]));


/*
* 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
* */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/*
* 思路：归并排序、分治
* 每一轮两两分别归并排序，递归到最后，自然就是最终结果了
* */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null
    if (lists.length === 1) return lists[0]
    let listLeft = mergeKLists(lists.slice(0,Math.floor(lists.length / 2)))
    let listRight = mergeKLists(lists.slice(Math.floor(lists.length / 2)))
    return sort(listLeft,listRight)
};
let sort = function (listLeft,listRight){
    if (listLeft === null){
        return listRight
    }
    if (listRight === null){
        return listLeft
    }
    let node = {}
    let res = node
    while (listLeft !== null || listRight !== null) {
        if (listLeft === null) {
            node.next = listRight
            listRight = null
            return res.next
        }
        if (listRight === null) {
            node.next = listLeft
            listLeft = null
            return res.next
        }
        if (listLeft.val >= listRight.val) {
            node.next = listRight
            listRight = listRight.next
        }else{
            node.next = listLeft
            listLeft = listLeft.next
        }
        node = node.next
    }
}
console.log(mergeKLists(
    [
        {val:1,next:{val:4,next:{val:5,next:null}}},
        {val:1,next:{val:3,next:{val:4,next:null}}},
    ]
));
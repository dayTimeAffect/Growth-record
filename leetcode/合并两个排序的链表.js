/*
* 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
* */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let reslut = {next:null}
    let tem = reslut
    while (l1 !== null || l2 != null) {
        if (l1 === null) {
            tem.next = l2
            break;
        }
        if (l2 === null){
            tem.next = l1
            break;
        }
        if (l1.val > l2.val) {
            tem.next = l2
            l2 = l2.next
        }else{
            tem.next = l1
            l1 = l1.next
        }
        tem = tem.next
    }
    return reslut.next
};
console.log(mergeTwoLists(
    {val:1,next:null},
    {val:2,next:{val:3,next:null}}
));
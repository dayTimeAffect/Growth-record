/*
* 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
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
    let result = {next:null}
    let tem = result
    while(l1 !== null || l2 !== null){
        if(l1 === null){
            tem.next = l2
            break;
        }
        if(l2 === null){
            tem.next = l1
            break;
        }
        if(l1.val > l2.val){
            tem.next = l2
            l2 = l2.next
        }else{
            tem.next = l1
            l1 = l1.next
        }
        tem = tem.next
    }
    return result.next
};
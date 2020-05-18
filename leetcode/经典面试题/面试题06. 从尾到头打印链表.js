/*
* 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
* */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let result = []
    while (head !== null) {
        result.unshift(head.val)
        head = head.next
    }
    return result
};
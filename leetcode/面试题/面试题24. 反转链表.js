/*
* 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
* 输入: 1->2->3->4->5->NULL
* 输出: 5->4->3->2->1->NULL
* */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let newNode = null //新的链表
    while (head !== null) {
        let temNode = head.next //保存原节点的下一个节点的地址
        head.next = newNode //反转
        newNode = head //保存反转后的结果
        head = temNode //移动到下一个节点
    }
    return newNode
};
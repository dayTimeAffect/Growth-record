/*
* 输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
* */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    /*
    * 迭代
    * */
    /*let res = null
    while(head){
        let obj = {
            val:head.val,
            next:res
        }
        res = obj
        head = head.next
    }
    return res*/
    /*
    * 优化迭代
    * */
    let preNode = null
    let currentNode = head
    while(currentNode){
        let next = currentNode.next;  // 保存当前‘遍历’到的节点下一个节点
        currentNode.next = preNode; // 开始反转链表方向
        preNode = currentNode;  // 为下一个节点的指向调转做准备
        currentNode = next;  // 移动到下一个节点
    }
    return preNode
};
/*var reverseList = function(head) {
    /!*
    * 递归
    * *!/
    let res = List(head,null)
    function List(node,reverse) {
        let new_node = {
            val:node.val,
            next:reverse
        }
        if (node.next) {
            new_node = List(node.next,new_node)
        }
        return new_node
    }
    return res
};*/
console.log(reverseList({val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:null}}}}}));
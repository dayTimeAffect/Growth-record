/*
* 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。

  如果有两个中间结点，则返回第二个中间结点。

  输入：[1,2,3,4,5]
  输出：此列表中的结点 3 (序列化形式：[3,4,5])
  返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
  注意，我们返回了一个 ListNode 类型的对象 ans，这样：
  ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

  输入：[1,2,3,4,5,6]
  输出：此列表中的结点 4 (序列化形式：[4,5,6])
  由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
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
var middleNode = function(head) {
    /*
    * 思路，用空间换时间。定义一个节点数组，保存每个节点。需要哪个取哪个
    * */
    let nodeArr = []
    while (head){
        let node = head
        nodeArr.push(node)
        head = head.next
    }
    return nodeArr[Math.floor(nodeArr.length / 2)]
};
/*var middleNode = function(head) {
    /!*
    * 思路，快慢指针，快指针每次走两步，慢指针每次走一步，快直接结束时，慢指针刚好结束
    * *!/
    let fastNode = head,slow = head
    while (fastNode){
        fastNode = fastNode.next
        if(fastNode){
            fastNode = fastNode.next
        }else{
            break
        }
        slow = slow.next

    }
    return slow
};*/

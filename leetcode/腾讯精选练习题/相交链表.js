/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let recode = new Set()
    let p = headA
    while (p){
        recode.add(p)
        p = p.next
    }
    p = headB
    while (p){
        if (recode.has(p)) return p
        p = p.next
    }
    return p
};
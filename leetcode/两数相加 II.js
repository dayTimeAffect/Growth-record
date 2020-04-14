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
var addTwoNumbers = function(l1, l2) {
    /*
    * 栈的思想，后进先出，用字符串代替数组节省空间
    * */
    let l1Val = ''
    let l2Val = ''
    while (l1 !== null || l2 !== null){
        if (l1 !== null){
            l1Val += l1.val
            l1 = l1.next
        }
        if (l2 !== null){
            l2Val += l2.val
            l2 = l2.next
        }
    }
    let node = null
    let temVal = 0
    let i = l1Val.length - 1,j = l2Val.length - 1
    while (i >= 0 || j >= 0 || temVal > 0){
        let temi = Number(l1Val[i]) || 0
        let temj = Number(l2Val[j]) || 0
        let bit = temi + temj + temVal
        temVal = Math.floor(bit / 10)
        bit = bit % 10
        let obj = {val:bit}
        obj.next = node
        node = obj
        i --;
        j --;
    }
    return node
};
console.log(addTwoNumbers(
));
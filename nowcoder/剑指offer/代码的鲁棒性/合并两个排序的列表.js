/*
* 题目描述：输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
* */
function Merge(pHead1, pHead2) {
    let result = {next:null}
    let node = result
    while (pHead1 !== null || pHead2 !== null) {
        if (pHead1 === null) {
            node.next = pHead2
            break;
        }
        if (pHead2 === null) {
            node.next = pHead1
            break;
        }
        if (pHead1.val > pHead2.val) {
            node.next = pHead2
            pHead2 = pHead2.next
        }else{
            node.next = pHead1
            pHead1 = pHead1.next
        }
        node = node.next
    }
    return result.next
}

console.log(Merge(
    {val:1,next: null},
    {val:2,next: null}
));
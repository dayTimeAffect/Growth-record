/*
* 题目描述：输入一个链表，反转链表后，输出新链表的表头。
* */
function ReverseList(pHead) {
    /*
    * 原地反转，需要始终记录原链表当前指针指向的下一个节点
    * 然后当前节点反转
    * */
    if (pHead === null) return null
    let tem = null
    let node = pHead.next
    while (node !== null){
        pHead.next = tem
        tem = pHead
        pHead = node
        node = pHead.next
    }
    pHead.next = tem
    return pHead
}
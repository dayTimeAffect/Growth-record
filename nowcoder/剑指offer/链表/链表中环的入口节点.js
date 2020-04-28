/*
* 题目描述
* 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
* */
function EntryNodeOfLoop(pHead) {
    /*
    * 利用数组存储每个节点地址
    * 每次到下个节点时判断该节点地址是否已经被存储，如果是，那么跳出循环
    * */
    let nodeCode = []
    while (pHead !== null) {
        if (nodeCode.indexOf(pHead) !== -1) {
            break;
        }else{
            nodeCode.push(pHead)
            pHead = pHead.next
        }
    }
    return pHead === null ? null : pHead
}
let a = {val:'a'}
let b = {val:'b'}
let c = {val:'c'}
let d = {val:'d'}
a.next = b
b.next = c
c.next = d
d.next = b
console.log(EntryNodeOfLoop(a));
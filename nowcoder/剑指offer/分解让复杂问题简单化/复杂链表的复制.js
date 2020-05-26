/*
* 题目描述：输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），
* 请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
* */
function Clone(pHead) {
    /*
    * pNode:存储pHead每个节点
    * newNode：存储新创建的每个节点
    * */
    let node = {next:null}
    let result = node
    let pNode = []
    let newNode = []
    while (pHead !== null) {
        node.next = {next:null,random:null}
        node = node.next
        node.label = pHead.label
        pNode.push(pHead)
        newNode.push(node)
        pHead = pHead.next
    }
    //按创建顺序，对应排序，赋值random引用节点
    for (let i = 0; i < pNode.length; i ++) {
        newNode[i].random = newNode[pNode.indexOf(pNode[i].random)]
    }
    return result.next
}
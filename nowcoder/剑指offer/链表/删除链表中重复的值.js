/*
* 题目描述
在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
* */
/*
* 注意：重复的节点不保留，所以结果中只能是没有重复值的
* */
function deleteDuplication(pHead) {
    /*
    * rescode记录没有重复的值
    * deletcode记录重复的值
    * 最后遍历rescode构成结果链表
    * */
    let rescode = new Set()
    let deletcode = new Set()
    while (pHead !== null){
        if (rescode.has(pHead.val) || deletcode.has(pHead.val)){
            rescode.delete(pHead.val)
            deletcode.add(pHead.val)
        }else{
            rescode.add(pHead.val)
        }
        pHead = pHead.next
    }
    if (rescode.size > 0) {
        let resNode = {}
        let tem = resNode
        for (let key of rescode) {
            let obj = {val:key,next:null}
            tem.next = obj
            tem = tem.next
        }
        return resNode.next
    }else{
        return null
    }
}

console.log(deleteDuplication({val: 1, next: {val: 4, next: {val: 5, next: {val: 4, next: {val: 3, next: {val: 2, next: {val: 5, next: null}}}}}}}));
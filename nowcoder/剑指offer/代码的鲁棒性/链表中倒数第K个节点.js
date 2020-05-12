/*
* 题目描述：输入一个链表，输出该链表中倒数第k个结点。
* */
function FindKthToTail(head, k) {
    //空间换时间，存储每个节点
    let arr = []
    while (head !== null){
        arr.push(head)
        head = head.next
    }
    return arr[arr.length - k]
}
function FindKthToTail_new(head, k) {
    //双指针，第一个指针遍历k次，然后第二个指针再和第一个指针一起遍历到第一个指针指向null
    if(head == null || k <= 0) return null; //容错处理
    let p1 = head
    let p2 = head
    for (let i = 1; i < k; i ++){
        if (p1.next != null) {
            p1 = p1.next;
        }else { //防止k过大，超出链表长度
            return null;
        }
    }
    while (p1.next !== null){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}
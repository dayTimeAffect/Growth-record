/*
* 题目描述
* 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
* */
function printListFromTailToHead(head)
{
    /*
    * 循环链表，当指针指向位null跳出
    * 结果数组从头插入值
    * */
    // write code here
    let result = []
    while(head !== null){
        result.unshift(head.val)
        head = head.next
    }
    return result
}
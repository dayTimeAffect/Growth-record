/*
* 题目描述：从上往下打印出二叉树的每个节点，同层节点从左至右打印。
* */
function PrintFromTopToBottom(root) {
    /*
    * 定义一个临时结点数组存下一层的结点，再定一个值数组存当前层的值
    * */
    if (root === null) return []
    let arr = [root]
    let result = []
    while (arr.length > 0) {
        let valA = []
        let tem = []
        for (let i = 0; i < arr.length; i ++) {
            valA.push(arr[i].val)
            if (arr[i].left !== null) tem.push(arr[i].left)
            if (arr[i].right !== null) tem.push(arr[i].right)
        }
        arr = tem
        result.push(valA)
    }
    return result
}
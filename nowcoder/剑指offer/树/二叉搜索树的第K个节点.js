/*
* 题目描述：给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。
* 注意返回的是结点不是该结点的值
* */
function KthNode(pRoot, k) {
    /*
    * 思路：先随便遍历，再排序(库函数)
    * */
    if (pRoot === null) return null
    let nodeArr = [pRoot]
    let nodeValArr = []
    while (nodeArr.length > 0) {
        let tem = nodeArr.shift()
        nodeValArr.push(tem)
        if (tem.left !== null) nodeArr.push(tem.left)
        if (tem.right !== null) nodeArr.push(tem.right)
    }
    nodeValArr.sort((a,b)=> a.val - b.val)
    return nodeValArr[k - 1]
}
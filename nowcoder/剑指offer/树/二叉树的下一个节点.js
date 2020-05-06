/*
* 题目描述：给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
* */
function GetNext(pNode) {
    let result = null
    if (pNode === null) return result
    if (pNode.right !== null){
        // 存在右子节点，找到右子节点的最左节点
        result = pNode.right
        while (result.left !== null) {
            result = result.left
        }
    }else{
        // 没有右子节点
        //   1. 当前节点是父节点的左节点
        //   2. 当前节点是父节点的右节点，往上找父节点的父节点......直到某一个节点是父节点的左节点，取父节点
        result = pNode
        while (result !== null) {
            if (result.next === null) {
                result = result.next
                break;
            }
            if (result === result.next.left) {
                result = result.next
                break;
            }
            result = result.next
        }
    }
    return result
}
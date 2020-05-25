/*
* 题目描述:输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
* */
function Convert(pRootOfTree) {
    /*
    * 中序遍历，缓存每个结点，遍历结点，修改指针
    * */
    if (pRootOfTree === null) return null
    let stack = []
    let middleOrder = function (node,stack) {
        if (node.left !== null) stack.push(...middleOrder(node.left,[]))
        stack.push(node)
        if (node.right !== null) stack.push(...middleOrder(node.right,[]))
        return stack
    }
    middleOrder(pRootOfTree,stack)
    for (let i = 0; i < stack.length; i ++) {
        stack[i].right = stack[i + 1] || null
        stack[i].left = stack[i - 1] || null
    }
    return stack[0]
}

console.log(Convert(
    {val:2,left:{val: 1,left: null,right: null},right: {val:3,left: null, right: null}}
));
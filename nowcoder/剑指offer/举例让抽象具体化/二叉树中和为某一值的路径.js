/*
* 题目描述：输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
* */
function FindPath(root, expectNumber) {
    /*
    * 必须到叶结点
    * 广度优先搜索
    * */
    let result = []
    if (root === null) return result
    let nodeArray = new Map()
    nodeArray.set(root,[expectNumber,[]])
     while (nodeArray.size > 0) {
        let temArray = new Map()
         for(let [node,tem] of nodeArray.entries()){
             tem[1].push(node.val)
             let temNumber = tem[0] - node.val
             if (node.left === null && node.right === null && temNumber === 0)result.push(tem[1]) //保证是叶节点
             if (node.left !== null) temArray.set(node.left,[temNumber,[...tem[1]]]);
             if (node.right !== null) temArray.set(node.right,[temNumber,[...tem[1]]]);
         }
         nodeArray = temArray
     }
    return result
}

console.log(FindPath(
    {
        val: 10,
        left: {val: 5, left: {val: 4, left: null, right: null}, right: {val: 7, left: null, right: null}},
        right: {val: 12, left: null, right: null}
    },
    22
));
/*
* 题目描述：输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
* 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
* */
function reConstructBinaryTree(pre, vin) {
    /*
    * 一层一层找根节点
    * */
    let result = null
    if (pre.length > 1) {
        let rootNode = pre[0]
        let vinLeft = vin.slice(0,vin.indexOf(pre[0]))
        let preLeft = pre.splice(1,vinLeft.length)
        let vinRight = vin.slice(vin.indexOf(pre[0]) + 1)
        let preRight = pre.splice(1)
        result = {
            val:pre[0],
            left:reConstructBinaryTree(preLeft,vinLeft),
            right:reConstructBinaryTree(preRight,vinRight)
        }
    }else if (pre.length === 1) {
        result = {
            val:pre[0],
            left:null,
            right:null
        }
    }
    return result
}
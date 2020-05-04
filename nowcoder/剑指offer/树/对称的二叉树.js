/*
* 题目描述：请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
* 题目理解：需要二叉树与该二叉树的镜像相同，也就是说该二叉树的遍历结果与该二叉树镜像的遍历结果应该是一致的
* */
function isSymmetrical(pRoot) {
    /*
    * 前序遍历：先输出该节点值，然后遍历左节点、再遍历右节点
    * 那么它的镜像遍历方法就应该对称，先输出该节点值，然后遍历右节点、再遍历左节点
    * 注意：节点为空也需要遍历进去，否者会出错
    * */
    let ergodic = function (root,arr,index) {
        if (root === null) arr.push(null)
        else {
            arr.push(root.val)
            if (index === 'left') {
                ergodic(root.left,arr,index)
                ergodic(root.right,arr,index)
            }
            if (index === 'right') {
                ergodic(root.right,arr,index)
                ergodic(root.left,arr,index)
            }
        }
        return arr
    }
    let left = ergodic(pRoot,[],'left')
    let right = ergodic(pRoot,[],'right')
    let len = left.length - 1
    while (len >= 0) {
        if (left.pop() === right.pop()) {
            len --
        }else{
            return false
        }
    }
    return true
}
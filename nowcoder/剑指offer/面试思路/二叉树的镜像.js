/*
* 题目描述：操作给定的二叉树，将其变换为源二叉树的镜像。
* */
function Mirror(root) {
    /*
    * 递归交换
    * */
    if (root === null) return root
    let tem = root.left
    root.left = root.right
    root.right = tem
    if (root.left !== null) Mirror(root.left)
    if (root.right !== null) Mirror(root.right)
    return root
}
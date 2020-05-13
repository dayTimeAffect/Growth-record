/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    /*
    * 暴力法：给每个结点增加一个pre指向它的父结点，遍历到p、q分别存储他们的所有父结点
    * 最后在两个数组中找到最近的父结点
    * */
    let pParent = [],qParent = []
    let arr = [root]
    root['pre'] = null
    while (pParent.length !== 0 && qParent.length !== 0){
        let tem = arr.shift()
        if (tem.left !== null){
            tem.left.pre = tem
            arr.push(tem.left)
        }
        if (tem.right !== null){
            tem.right.pre = tem
            arr.push(tem.right)
        }
        if (tem === p){
            let node = tem
            pParent.push(node)
            while (node.pre !== null){
                node = node.pre
                pParent.push(node)
            }
        }
        if (tem === q){
            let node = tem
            qParent.push(node)
            while (node.pre !== null){
                node = node.pre
                qParent.push(node)
            }
        }
    }
    for (let i = 0; i < pParent.length; i ++) {
        if (qParent.includes(pParent[i])) {
            return pParent[i]
        }
    }
};
var lowestCommonAncestor_new = function (root, p, q) {
    /*
    * 在一个子树的遍历过程中：遇到当前节点是p或q，则返回当前节点，不往下遍历它的子树。遍历到了null节点，就返回null
    * */
    if (root===null||root===p||root===q) {
        return root
    }
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    /*
    * p和q分别在左右子树，则LCA为左右子树的父节点
    * p和q同在一个子树a。则返回递归调用子树a的结果，整体问题拆分为局部问题
    * */
    if (left && right) {
        return root
    }
    return left ? left : right
};


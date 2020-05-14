/*
* 题目描述：输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
* */
function HasSubtree(pRoot1, pRoot2) {
    /*
    * isSubtree判断pRoot2是否为pRoot1的子结构，因为空树不是任意一个树的子结构所以不能原地递归
    * 循环pRoot1,当当前结点值===pRoot2的结点值，进入isSubtree判断，返回true，跳出循环
    * */
    if (pRoot1 === null || pRoot2 === null) return false
    let isSubtree = function (pRoot1, pRoot2) {
        if (pRoot2 === null) return true
        if (pRoot1 === null) return false
        return pRoot1.val === pRoot2.val && isSubtree(pRoot1.left,pRoot2.left) && isSubtree(pRoot1.right,pRoot2.right)
    }
    let arr = [pRoot1]
    let result = false
    while (arr.length > 0) {
        let tem = arr.shift();
        if (tem.val === pRoot2.val) {
            if (isSubtree(tem, pRoot2)) {
                result = true
                break;
            }
        }
        if (tem.left !== null) arr.push(tem.left)
        if (tem.right !== null) arr.push(tem.right)
    }
    return result
}
/*
* 题目描述：输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
* */
function VerifySquenceOfBST(sequence) {
    /*
    * 二叉查找树（Binary Search Tree），（又：二叉搜索树，二叉排序树）它或者是一棵空树，或者是具有下列性质的二叉树：
    * 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
    * 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
    * 所以左子树最大值小于根结点，右子树最小值大于根节点
    * 双指针，left指针寻炸左子树，right指针寻找右子树，如果最后没有遍历完，则不是一个二叉搜索树
    * */
    if (sequence.length === 0) return false
    if (sequence.length < 3) return true
    let left = []
    let isLeft = false
    let right = []
    let isRight = false
    let tem = sequence.pop()
    let i = 0,j = sequence.length - 1
    while (i <= j) {
        if (tem > sequence[i]) {
            left.push(sequence[i])
            i ++
        }else{
            isLeft = true
        }
        if (tem < sequence[j]) {
            right.unshift(sequence[j])
            j --
        }else{
            isRight = true
        }
        if (isLeft && isRight) return false
    }
    return (left.length === 0 ? true : VerifySquenceOfBST(left)) && (right.length === 0 ? true : VerifySquenceOfBST(right))
}

console.log(VerifySquenceOfBST([0,7,1,6,11,10,5]));
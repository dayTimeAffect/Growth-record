/*
* 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
* */
var levelOrder = function(root) {
    let arr = [root]
    let result = []
    if (root === null) return result
    while (arr.length > 0) {
        let tem = []
        let temVal = []
        for (let i = 0; i < arr.length; i ++) {
            temVal.push(arr[i].val)
            if (arr[i].left !== null) tem.push(arr[i].left)
            if (arr[i].right !== null) tem.push(arr[i].right)
        }
        arr = tem
        result.push(temVal)
    }
    return result
};
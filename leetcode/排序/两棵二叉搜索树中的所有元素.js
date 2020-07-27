/*
* https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    //将二叉搜索数的值导出
    let rootArr1 = sortRootVal(root1, []),rootArr2 = sortRootVal(root2, [])
    //重新排列两个有序数组
    let i = 0,j = 0,res = []
    while (i < rootArr1.length || j < rootArr2.length){
        if (i === rootArr1.length){
            res.push(...rootArr2.slice(j))
            break;
        }
        if (j === rootArr2.length){
            res.push(...rootArr1.slice(i))
            break;
        }
        if (rootArr1[i] < rootArr2[j]){
            res.push(rootArr1[i])
            i ++
        }else{
            res.push(rootArr2[j])
            j ++
        }
    }
    return res
};

var sortRootVal = function (root, list) {
    if( !root) return list;
    sortRootVal(root.left,list)
    list.push(root.val);
    sortRootVal(root.right,list);
    return list
}
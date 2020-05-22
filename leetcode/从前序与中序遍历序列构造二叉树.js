/*
* 根据一棵树的前序遍历与中序遍历构造二叉树。
* 注意:你可以假设树中没有重复的元素。
* */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null
    let node = {
        val:preorder[0],
        left:null,
        right:null
    }
    if (preorder.length > 1) {
        let index = inorder.indexOf(node.val)
        let leftInorder = inorder.slice(0,index)
        let leftPreorder = preorder.slice(1,leftInorder.length + 1)
        let rightInorder = inorder.slice(index + 1)
        let rightPreorder = preorder.slice(leftInorder.length + 1)
        console.log('left',leftPreorder,leftInorder);
        console.log('right',rightPreorder, rightInorder);
        node.left = buildTree(leftPreorder,leftInorder)
        node.right = buildTree(rightPreorder,rightInorder)
    }
    return node


};
console.log(buildTree([3, 9, 20, 15, 7],
    [9, 3, 15, 20, 7]));
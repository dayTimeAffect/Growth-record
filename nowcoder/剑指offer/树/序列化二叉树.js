/*
* 题目描述：请实现两个函数，分别用来序列化和反序列化二叉树
* 二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存。
* 序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#），以 ！ 表示一个结点值的结束（value!）。
* 二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。
* 例如，我们可以把一个只有根节点为1的二叉树序列化为"1,"，然后通过自己的函数来解析回这个二叉树
* */
/*
* 可以根据本系列中的重建二叉树题建立先序和中心字符串，然后跑代码就行了
* 本题我使用层序来进行序列化和反序列化，好像弄复杂了
* */
function Serialize(pRoot) {
    let result = ''
    let arr = [pRoot]
    while (arr.length > 0) {
        let temS = ''
        let temA = []
        while (arr.length > 0) {
            let tem = arr.shift()
            if (tem === null){
                temS += '#!'
            } else{
                temS += tem.val + '!'
                temA.push(tem.left,tem.right)
            }
        }
        result += temS + '@'
        arr = temA
    }
    return result
}
function Deserialize(s) {
    let arr = s.split('@')
    arr.pop()
    for (let i = 0; i < arr.length; i ++) {
        arr[i] = arr[i].split('!')
        arr[i].pop()
    }
    let pRoot = arr[0][0] === '#' ? null : {val:arr[0][0],left:null,right:null}
    let levArr = [pRoot]
    for (let i = 1; i < arr.length; i ++) {
        let tem = []
        for (let j = 0; j < arr[i].length; j ++) {
            let index = Math.floor( j / 2)
            if (arr[i][j] !== '#') {
                if (j % 2 === 1){
                    levArr[index].right = {val:arr[i][j],left:null,right:null}
                    tem.push(levArr[index].right)
                } else{
                    levArr[index].left = {val:arr[i][j],left:null,right:null}
                    tem.push(levArr[index].left)
                }

            }
        }
        levArr = tem
    }
    return pRoot
}

console.log(Deserialize('8!@6!10!@5!7!9!11!@#!#!#!#!#!#!#!#!@'));
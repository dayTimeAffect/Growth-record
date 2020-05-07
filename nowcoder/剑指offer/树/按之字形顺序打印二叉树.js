/*
* 题目描述：请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
* */
function Print(pRoot) {
    let result = []
    if (pRoot === null) return result
    let arr = [pRoot]
    let order = true
    while (arr.length > 0) {
        let tem = []
        let temRrs = []
        for (let i = 0; i < arr.length; i ++) {
            temRrs.push(arr[i].val)
            if (arr[i].left !== null){
                tem.push(arr[i].left)
            }
            if (arr[i].right !== null){
                tem.push(arr[i].right)
            }
        }
        arr = tem
        if (!order) temRrs.reverse()
        result.push(temRrs)
        order = !order
    }
    return result
}

console.log(Print({val:1,left:{val:2,left: null,right:null},right: {val:3,left:null,right:null}}));
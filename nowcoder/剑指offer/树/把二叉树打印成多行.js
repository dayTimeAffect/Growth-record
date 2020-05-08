/*
* 题目描述：从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
* */
function Print(pRoot) {
    let result = []
    if (pRoot === null) return result
    let arr = [pRoot]
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
        result.push(temRrs)
    }
    return result
}
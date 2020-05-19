/*
* 题目描述：输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，
序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
* */
function IsPopOrder(pushV, popV) {
    /*
    * 定义一个栈模拟压入和弹出，如果最后栈清空，那么返回true否则返回false
    * */
    let stack = []
    let pop = popV.shift()
    for (let i = 0;i < pushV.length; i ++) {
        stack.push(pushV[i])
        if (pop === pushV[i]) {
            while (stack.length > 0){
                let tem = stack.pop()
                if (tem === pop) pop = popV.shift()
                else {
                    stack.push(tem)
                    break;
                }
            }
        }
    }
    return stack.length === 0 ? true : false
}

console.log(IsPopOrder(
    [1,2,3,4,5],
    [4,5,3,1,2]
));
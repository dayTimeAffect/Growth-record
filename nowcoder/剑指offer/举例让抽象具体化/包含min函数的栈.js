let stack = {
    arr:[],
    min:Infinity
}
function push(node) {
    stack.arr.push(node)
    stack.min = Math.min(node,stack.min)
}
function pop() {
    let tem = stack.arr.pop()
    if (tem === stack.min) {
        stack.min = Infinity
        for (let i = 0; i < stack.arr.length; i ++) {
            stack.min = Math.min(stack.arr[i],stack.min)
        }
    }
}
function top() {
    return stack.arr[0]
}
function min() {
    return stack.min
}
/*
* 题目描述
* 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
* （注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
* */
// 由题，n肯定大于等于2，不然不会有A[n - 2],所以就不用考虑特殊情况了
function multiply(array) {
    /*
    * 方法一：遍历B,暴力法求解数组B
    * O(n^2)
    * 测试运行时间：11ms
    * 占用内存：5240k
    * */
    let B = new Array(array.length)
    for (let i = 0; i < B.length; i ++){
        B[i] = 1
        for (let j = 0; j < array.length; j ++) {
            if (i === j) continue;
            B[i] *= array[j]
        }
    }
    return B
}
function multiply_new(array) {
    /*
    * 使用空间换时间
    * 使用两个数组分别存储
    * order = [A[0], A[0]*A[1], A[0]*A[1]*A[2], ..., A[0]*A[1]*...*A[n - 1]]
    * reverseOrder = [A[0]*A[1]*...*A[n - 1], ..., A[2]*A[3]*...*A[n - 1], ..., A[n - 2]*A[n - 1], A[n - 1]]
    * 所以 B[i] = order[i - 1] * reverseOrder[i + 1]
    * 需要遍历两遍n
    * O(n)
    * */
    let order = []
    let reverseOrder = []
    order[0] = array[0]
    reverseOrder[array.length - 1] = array[array.length - 1]
    for (let i = 1,j = array.length - 2; i < array.length;i ++,j --){
        order[i] = array[i] * order[i - 1]
        reverseOrder[j] = array[j] * reverseOrder[j + 1]
    }
    let B = []
    for (let i = 0;i < array.length;i ++) {
        let left = order[i - 1] === undefined ? 1 : order[i - 1]
        let right = reverseOrder[i + 1] === undefined ? 1 : reverseOrder[i + 1]
        B[i] = left * right
    }
    return B
}

console.log(multiply_new([1,2,0,4,5]));

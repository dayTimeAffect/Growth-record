/*
* 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

* 初始化 A 和 B 的元素数量分别为 m 和 n。
* */

/*
* 输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
* */

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {

    /*A.splice(m,A.length - m)
    B = B.slice(0,n)
    A.push(...B)
    A.sort((value1,value2)=>{
        if(value1 < value2){
            return -1;
        }else if(value1 == value2){
            return 0;
        }else{
            return 1;
        }
    })*/

    /*
    * 从后面，由大到小插入
    * */
    let i = m - 1,j = n - 1,p = m + n - 1
    while (i >= 0 || j >= 0) {
        let a = i >= 0 ? A[i] : -Infinity, //防止负数
            b = j >= 0 ? B[j] : -Infinity;
        if (a <= b) {
            A[p] = b
            j --
        }else{
            A[p] = a
            i --
        }
        p --
    }
    return A
};
console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1, 2, 2], 3));
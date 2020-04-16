/*
* 给出一个区间的集合，请合并所有重叠的区间。
* 输入: [[1,3],[2,6],[8,10],[15,18]]
* 输出: [[1,6],[8,10],[15,18]]
* 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
*
* 题目没有说怎么的集合，就有可能集合左端点不递增，乱序的
* */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    /*
    * 先按左端点排序
    * 再根据当前位置右端点与下一位置左端点比较判断区间是否相交
    * 相交的话更新右端点
    * */
    if (intervals.length < 2) return  intervals
    intervals.sort((a,b)=>a[0] - b[0])
    let res = []
    res[0] = intervals[0]
    for (let i = 1;i < intervals.length;i ++){
        let tem = res.pop()
        if (tem[1] >= intervals[i][0]) {
            tem[1] = tem[1] < intervals[i][1] ? intervals[i][1] : tem[1]
            res.push(tem)
        }else{
            res.push(tem,intervals[i])
        }
    }
    return res
};
/*
* 方法二，自己写排序
* */
var merge_new = function(intervals) {
    if (intervals.length < 2) return  intervals
    let quicksort = function (intervals){
        if (intervals.length < 2){
            return intervals
        }
        let tem = intervals[0]
        let left = []
        let right = []
        for (let i = 1; i < intervals.length; i ++) {
            if (intervals[i][0] < tem[0]){
                left.push(intervals[i])
            } else{
                right.push(intervals[i])
            }
        }
        return [...quicksort(left),tem,...quicksort(right)]
    }
    intervals = quicksort(intervals)
    let res = []
    res[0] = intervals[0]
    for (let i = 1;i < intervals.length;i ++){
        let tem = res.pop()
        if (tem[1] >= intervals[i][0]) {
            tem[1] = Math.max(tem[1],intervals[i][1])
            res.push(tem)
        }else{
            res.push(tem,intervals[i])
        }
    }
    return res
};
console.log(merge_new(
    [[1,3],[2,6],[8,10],[15,18]]
));
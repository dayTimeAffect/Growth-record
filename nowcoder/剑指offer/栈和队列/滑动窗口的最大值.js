/*
* 题目描述
* 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}；
* 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}，
* {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
* */
function maxInWindows(num, size) {
    /*
    * 使用队列模拟滑动操作。若进队列数 >= 出队列数 那么此时滑动窗口最大值为Math.max(max,进队列数)
    * 若进队列数 < 出队列数 ，则需要判断出队列数是否为上一轮窗口的最大值，若是，则需要在窗口中重新寻找最大值
    * */
    if (size === 0) return []
    let queue = []
    let reslut = []
    let max = -Infinity
    for (let i = 0; i <= num.length; i ++) {
        if (queue.length < size) {
            queue.push(num[i])
            max = Math.max(max,num[i])
        }else{
            reslut.push(max)
            let tem = queue.shift()
            queue.push(num[i])
            if (num[i] >= tem) {
                max = Math.max(num[i],max)
            }else {
                if (tem === max) {
                    max = queue[0]
                    for (let j = 1;j < queue.length; j ++) {
                        max = Math.max(max,queue[j])
                    }
                }
            }
        }
    }
    return reslut
}

console.log(maxInWindows([2,3,4,2,6,2,5,1],0));
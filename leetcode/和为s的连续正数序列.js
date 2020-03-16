/*
* 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

* 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
* */

/*
* 示例 1：

    输入：target = 9
    输出：[[2,3,4],[4,5]]
* */

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let resArr = []
    let index = Math.floor(target / 2)
    let isPush = 1
    while(index >= 2){
        let tem = target / index
        if(
            ((index % 2 == 0) && (tem + 0.5) == Math.ceil(tem)) //偶数情况
            || ((index % 2 == 1) &&(target % index == 0))//奇数情况
        ){
            isPush = 1
            let tem_arr = new Array(index)
            let tem_i
            for (let i = 0;i < index;i++) {
                tem_i = Math.floor(index / 2)
                if (i < tem_i) {
                    tem_arr[i] = Math.ceil(tem) - tem_i + i
                }else{
                    tem_arr[i] = Math.ceil(tem) + i - tem_i
                }
                if (tem_arr[i] <= 0) {
                    isPush = 0;
                    break;
                }
            }
            if (isPush) resArr.push(tem_arr)
        }
        index --
    }
    return resArr
};
console.log(findContinuousSequence(15));


/*
* 除以 奇数  为整数
* 除以 偶数 为0.5
*最小除以2
* 最大除以能整除的奇数
* */



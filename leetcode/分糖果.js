/*
* 排排坐，分糖果。

* 我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。

* 给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。

* 然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友 n + 2 颗，依此类推，直到给最后一个小朋友 2 * n 颗糖果。

* 重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。

* 返回一个长度为 num_people、元素之和为 candies 的数组，以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。
*/
/*
* 输入：candies = 7, num_people = 4
* 输出：[1,2,3,1]
* 解释：
* 第一次，ans[0] += 1，数组变为 [1,0,0,0]。
* 第二次，ans[1] += 2，数组变为 [1,2,0,0]。
* 第三次，ans[2] += 3，数组变为 [1,2,3,0]。
* 第四次，ans[3] += 1（因为此时只剩下 1 颗糖果），最终数组变为 [1,2,3,1]。
*/

/*
* 方案1，暴力解法
* */
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let resArr = new Array(num_people).fill(0)
    let index = 0
    let num = 0
    while (candies > 0) {
        num ++
        if (num >= candies) num = candies
        resArr[index] = resArr[index] + num
        index ++
        if (index == num_people) index = 0
        candies = candies - num
    }
    return resArr
};
// console.log(distributeCandies(10, 3));


/*
* 方案2，等差数列求和
* */

var distributeCandies_new = function(candies, num_people) {
    let resArr = new Array(num_people).fill(0)
    let all = num_people * (num_people + 1) / 2 //等差数列求和  （a1 + an）* n / 2
    let index = 0
    let factor = 1
    //计算层数
    /*
    * 1 2 3
    * 4 5 6
    * 7 8 .
    * */
    while (candies / all > 1) {
        factor ++
        all = (num_people * factor) * (1 + num_people * factor) / 2
    }

    for (let i = 0; candies > 0 && i < num_people; i++){
        resArr[i] = (i + 1) * (factor - 1) + num_people * (factor - 1) * (factor - 2) / 2 //到倒数第二层 每一列等差数列求和   n*a1 + n*(n-1)*d/2
        candies -= resArr[i]
    }

    while (1) {
        let tem = (index + 1) + (factor - 1) * num_people  //a1 + (n - 1) * d
        resArr[index] += tem
        candies -= tem
        if (candies <= 0) {
            resArr[index] += candies
            break;
        }
        index ++
    }
    return resArr
};
console.log(distributeCandies_new(7, 4));


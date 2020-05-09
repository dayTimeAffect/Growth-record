/*
* 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，
* 那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。
* */
/*
* Insert持续插入数据，GetMedian解析数据，所以需要定义一个全局变量data
* 由题，需要每次都维护data保持顺序
* */
let data = []
function Insert(num)
{
    if (data.length === 0) {
        data.push(num)
    }else{
        let index = data.length - 1
        while (1){
            if (data[index] <= num || index === -1) {
                data[index + 1] = num
                break;
            }else{
                data[index + 1] = data[index]
            }
            index --
        }
    }
}
function GetMedian(){
    let result = undefined
    if (data.length % 2 === 1) {
        //奇数
        result = data[Math.floor(data.length / 2)]
    }else{
        //偶数
        result = (data[Math.floor(data.length / 2)] + data[Math.ceil(data.length / 2)]) / 2
    }
    return result
}

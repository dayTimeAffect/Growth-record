//Echarts的tooltip提示框中添加小点

let options = {
    tooltip: {
        trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'cross'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            //params是一个数组
            var result = '';

            params.forEach(function (item) {

                result += item.marker + " " + item.seriesName + " : " + item.value +"</br>";

            });

            return result;

        }
    },
}
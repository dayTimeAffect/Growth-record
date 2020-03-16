/*
* 一般用于柱形图从左到右移动
* 方式：
*   数据动态变化
* */



let data = [10, 52, 200, 334, 390, 330, 220,100,150,135,156,111,50,36]
window.setInterval(function(){
    let tem = data.shift();//删除第一个数据
    data.push(tem);//添加到尾部
    refreshData();
},2000);
function refreshData(){
    let option = myChart.getOption();//获取页面的option
    let tem = data.slice(0,7) //数据太长，限制一下
    option.series[0].data = tem;//设置新的数据
    myChart.setOption(option);//绑定到ECharts
}

//展示了一个从右到左的效果

let options = {
    grid: {
        // top:'10%',
        // left: '10%',
        // right: '8%',
        // bottom: '8%',
        containLabel: false  //  ->必填，使容器的偏移值不受x,y轴影响
    },
}


function animation(_this,myChart) {
    _this.variable = window.setInterval(function (){
        let position = 10 + 90/20 * _this.index  //移动的范围，需要计算
        let positionArr = ['','50%']
        positionArr[0] = position + '%'
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: Math.floor(_this.index / 2),
            position:positionArr,
        })
        _this.index = _this.index + 0.1
        if (_this.index >= 20) {
            _this.index = 0
        }
    },100)
}
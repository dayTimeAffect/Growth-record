let names = ["iPhone X", "iPhone XS"]

let colors = ["黑色", "白色"]

let storages = ["64g", "128g", "256g"]

specCombinationList =  [
    { id: "1", specs: ["iPhone X", "黑色", "64g"] },
    { id: "2", specs: ["iPhone X", "黑色", "128g"] },
    { id: "3", specs: ["iPhone X", "白色", "128g"] },
    { id: "4", specs: ["iPhone XS", "白色", "256g"] }
]
class adjacency {
    constructor(vertex,data) {
        this.vertex = vertex
        this.data = data
        this.adjoinArray = new Map()
        this.init()
    }
    init(){
        let {vertex, adjoinArray, data} = this
        vertex.forEach(value => {
            adjoinArray.set(value,[])
        })
        for (let {specs} of data){
            for (let i = 0; i < specs.length; i ++) {
                let vertexArr = Array(vertex.length).fill(0)
                for (let j = 0; j < specs.length; j ++) {
                    if (i === j) continue;
                    vertexArr[vertex.indexOf(specs[j])] = 1
                }
                this.adjoinArray.get(specs[i]).push(vertexArr)
            }
        }
        vertex.forEach(value => {
            let resArr = Array(vertex.length).fill(0)
            //合并当前顶点可以选择的所有列
            for (let i = 0; i < vertex.length; i ++){
                let tem = adjoinArray.get(value)
                for (let j = 0; j < tem.length; j ++) {
                    if (tem[j][i] === 1 && resArr[i] !== 1) {
                        resArr[i] = 1
                        break;
                    }
                }
            }
            //可以选择同级的

            //当前顶点可以选择的列
            adjoinArray.set(value,resArr)
        })
        //最终的邻接矩阵
        this.adjoinArray = adjoinArray
    }
}
let Adjacency =  new adjacency([...names,...colors,...storages], specCombinationList)
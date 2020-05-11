const net = require('net');
class Request {
    //method,url = host + port + path
    //body: key/value
    //headers
    constructor(options){
        this.method = options.method || "GET"
        this.host = options.host;
        this.port = options.post || 80
        this.path = options.path || '/'
        this.body = options.body || {}
        this.headers = options.headers || {}
        if (this.headers["Content-Type"]) {
            this.headers["Content-Type"] = "application/x-www-form-urlencoded"
        }
        if (this.headers["Content-Type"] === 'application/json') {
            this.bodyText = JSON.stringify(this.body)
        }else if (this.headers["Content-Type"] === "application/x-www-form-urlencoded") {
            this.bodyText = Object.keys(this.body).map( key => `${key} = ${encodeURIComponent(this.body[key])}`).join('&')
        }
        this.headers["Content-Length"] = this.bodyText.length
    }
    toString(){
        return `${this.method} ${this.path} HTTP/1.1\r
        ${Object.keys()}
        `
    }
    open(method,url){

    }
    send(connection) {
        return new Promise((resolve, reject) => {

        })
    }
}
const client = net.createConnection(
    {
        host:"127.0.0.1",
        port: 8088
    },
    () => {
    // 'connect' 监听器
    console.log('已连接到服务器');
    client.write('你好世界!\r\n');
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log('已从服务器断开');
});
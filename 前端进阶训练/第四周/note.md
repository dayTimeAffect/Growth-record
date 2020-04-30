## 事件循环
拿浏览器举例：setTimeout、setInterval 这种其实不是 JS 语法本身的 API，是 JS 的宿主浏览器提供的 API， 所以是宏任务。
而 Promise 是 JS 本身自带的 API，这种就是微任务。
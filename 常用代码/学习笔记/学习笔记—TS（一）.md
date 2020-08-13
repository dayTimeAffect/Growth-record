公司项目需要使用ts重构，那么名正言顺的上班学习啦。
> 任何可以使用JavaScript来编写的应用，最终会由JavaScript编写
>
> 任何可以使用JavaScript来编写的优秀的大型应用，最终会由TypeScript编写

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e47bd96c92848b19120e22ffa3504f6~tplv-k3u1fbpfcp-zoom-1.image)
看来再不学习就晚啦
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0edd3849fa448a5abff7aa8c7d5bc65~tplv-k3u1fbpfcp-zoom-1.image)

## 安装和使用

#### install

```javascript
npm install -g typescript

tsc -v
```

#### use

新建第一个ts文件 hello.ts，在编辑器中输入：

```
const hello = () => 'hello word!!!'

console.log(hello());
```

ts文件是不能直接运行的，打开命令行，输入：

```
tsc hello.ts
```

这样，在hello.ts文件旁，会出现一个hello.js，可以发现两个文件中的代码基本一样，那么我们就可以运行我们的代码啦



### 尝试特性

```
const hello = (name: string) => `hello ${name}!!!`

const str = 'word'

console.log(hello('word'));

console.log(hello(str));

console.log(hello(123));

console.log(hello(['word']));
```
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b908ea329124db8a67530f276ea6be3~tplv-k3u1fbpfcp-zoom-1.image)

可以看见，将函数的参数输入定义为字符串，在输入其他类型时，在编译的时候就已经提示错误了。

那么真正开始学习咯
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77eeda7a92124c6b94d37c7be2b0cd4d~tplv-k3u1fbpfcp-zoom-1.image)
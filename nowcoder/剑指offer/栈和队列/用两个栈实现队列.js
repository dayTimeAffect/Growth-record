/*
* 题目描述
* 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
* */
/*
* 题目理解：a栈表示入队列，b栈表示出队列，但是栈是后进先出，队列是先进先出
* 所以表示b的顺序是和a栈顺序相反。于是需要出队列时，a栈一个一个出，b栈将出的值一个一个进。最后b栈再出一个，那么就是a栈中最先进的那一个了
* js模拟栈使用 push和pop
* */
let outStack = [];
let isStack = [];
function push(node)
{
    isStack.push(node);
}
function pop()
{
    if(!outStack.length){
        while(isStack.length){
            outStack.push(isStack.pop());
        }
    }
    return outStack.pop();
}
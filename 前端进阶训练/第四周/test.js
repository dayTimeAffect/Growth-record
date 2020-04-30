
console.log(0)
new Promise(resolve => {
    console.log(1)
    resolve();
    console.log(2),console.log(2.5)
}).
then(()=>{
    console.log(3)
})
console.log(4)
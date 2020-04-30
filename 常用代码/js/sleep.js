function sleep (time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
//使用方式 1
sleep(2000).then(() => {
    console.log('sleep')
})
//使用方式 2
void async function () {
    console.log('Do some thing, ' + new Date());
    await sleep(3000);
    console.log('Do other things, ' + new Date());
}()

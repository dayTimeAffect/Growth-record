const getQueryString = ({url, name}) => {
    const search = (url ? url : window.location.search).split('?')[1] || '';
    let theRequest = {}
    let requestStr = search.split('&')
    requestStr.forEach(v => {
        theRequest[v.split('=')[0]] = v.split('=')[1]
    })
    if (name) return theRequest[name]
    return theRequest
}
console.log(getQueryString({url: 'https://www.baidu.com/s?wd=a&rsv_spt=1', name: 'wd'}));
console.log(getQueryString({url: 'https://www.baidu.com/s?wd=a&rsv_spt=1'}));
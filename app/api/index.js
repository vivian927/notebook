
module.exports=(url)=>{
    let apiMap = {
        '/list.action':['animal','pork','chicken'],
        '/user.action':['moli','creed', 'china']
    }
    return Promise.resolve(apiMap[url]);
}

module.exports=(request)=>{
    let {url,context} = request;
    let apiMap = {
        '/list.action':['animal','pork','chicken'],
        '/user.action':['moli','creed', 'china']
    };
    context.body = apiMap[url];
    return Promise.resolve(request);
}

module.exports=(request)=>{
    let {url,method} = request;
    let apiMap = {
        '/list.action':['animal','pork','chicken'],
        '/user.action':['moli','creed', 'china']
    };
    if (method.toLowerCase() === 'get'){
        return Promise.resolve(apiMap[url]);
    } else {
        //处理post请求
        
        return new Promise((resolve,reject)=>{
            
        });
    }
    
}

// 处理客户端数据

// request: query + body + method

module.exports = (request)=>{
    let {method,url,context} = request;
    context.method = method.toLowerCase();
    
    return Promise.resolve({
        then:(resolve,reject)=>{
            
            //@TODO
            if (context.method == 'post'){
                let data = ''
                request.on('data',(chunk)=>{
                    data += chunk;
                }).on('end',()=>{
                    context.body=JSON.parse(data); //body
                    //通知下一个流程
                    resolve(request);
                })
            } else {
                resolve(request);
            }
        }
    })
}
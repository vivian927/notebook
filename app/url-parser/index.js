
// 处理客户端数据

// request: query + body + method

module.exports = (request)=>{
    let {method,url,context} = reques;
    method = method.toLowerCase();
    return Promise.resolve({
        then:(resolve,reject)=>{
            context.method = method;
            //@TODO
            context.query = {};
            if (method == 'post'){
                let data = ''
                request.on('data',(chunk)=>{
                    data += chunk;
                }).on('end',()=>{
                    context.body=JSON.parse(data); //body
                    resolve();
                })
            } else {
                reslove();
            }
        }
    })
}
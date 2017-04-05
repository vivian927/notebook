
// 处理客户端数据

// request: query + body + method

module.exports = (ctx)=>{
    let {method,url} = ctx.req;
    let {reqCtx} = ctx;
    method = method.toLowerCase();
    
    return Promise.resolve({
        then:(resolve,reject)=>{
            
            //@TODO
            if (method == 'post'){
                let data = [];
                ctx.req.on('data',(chunk)=>{
                    data.push(chunk);
                }).on('end',()=>{
                    let endData = Buffer.concat(data).toString();
                    reqCtx.body = JSON.parse(endData); //body
                    //通知下一个流程
                    resolve();
                })
            } else {
                resolve();
            }
        }
    })
}

// 处理客户端数据

// request: query + body + method
const Url = require('url')

module.exports = (ctx)=>{
    let {method,url} = ctx.req;
    let {reqCtx} = ctx;
    method = method.toLowerCase();
    
    Object.assign(reqCtx, Url.parse(url, true), {method})
    // reqCtx
    // query 对象
    // pathname 路径名
    
    return Promise.resolve({
        then:(resolve,reject)=>{
            console.log(reqCtx)
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

module.exports=(ctx)=>{
    let {url,method} = ctx.req;
    let {reqCtx,resCtx} = ctx;
    let {res} = ctx;
    let apiMap = {
        '/list.action':['animal','pork','chicken'],
        '/user.action':['moli','creed', 'china']
    };
    method = method.toLowerCase();
    return Promise.resolve({
        then:(resolve,reject)=>{
            if (url.match('action')){
                if (method == 'get'){
                    resCtx.body = JSON.stringify(apiMap[url]);
                } else {
                    let {body} = reqCtx;
                    resCtx.body = JSON.stringify(body);
                }
                resCtx.headers = Object.assign(resCtx.headers,{
                    'Content-Type':'application/json'
                })
            }
            resolve();
        }
    })
}
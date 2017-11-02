
const Router = require('./ajax')


module.exports=(ctx)=>{
    let {reqCtx,resCtx,res} = ctx;
    let {pathname,method} = reqCtx;
    
    return Promise.resolve({
        then:(resolve,reject)=>{
            
            if (pathname.match('action')){
                return Router.routes(ctx).then(val=>{
                    resCtx.body = JSON.stringify(val);
                    resCtx.headers = Object.assign(resCtx.headers,{
                        'Content-Type':'application/json'
                    })
                    resolve()
                }).catch(err=>{
                    resCtx.statusCode=400
                    resCtx.body = `${err.name} \n ${err.stack}`
                })
            }
            resolve();
        }
    })
}

const Router = require('./ajax')


module.exports=(ctx)=>{
    let {reqCtx,resCtx,res} = ctx;
    let {pathname,method} = reqCtx;
    if (pathname.match('action')){
        return Router.routes(ctx).then(val=>{
            if (val){
                resCtx.statusCode=200
                resCtx.body = JSON.stringify(val);
                resCtx.headers = Object.assign(resCtx.headers,{
                    'Content-Type':'application/json'
                })
            }
        }).catch(err=>{
            resCtx.statusCode=400
            resCtx.body = `${err.name} \n ${err.stack}`
        })
    } else {
        return Promise.resolve();
    }
}
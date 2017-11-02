/**
 * Created by coffee on 4月15日.
 */
const Cookie= require('cookie');
//设置白名单
const whiteNameList = ['/luyxyy'];

module.exports = (ctx)=>{
    let {pathname} = ctx.reqCtx;
    let {cookie} = ctx.req.headers;
    let {res,resCtx} = ctx;
    let cookieObj = Cookie.parse(cookie || '')
    
    return Promise.resolve({
        then:(resolve,reject)=>{        
            let cookieStr = time=>`auth=luyxyy;Max-Age=${time}`;

            if (cookieObj['auth']){
                resCtx.hasUser = true;
                res.setHeader('Set-Cookie', cookieStr(3600));
            }
            if(whiteNameList.indexOf(pathname) > -1){
                res.setHeader('Set-Cookie', cookieStr(3600));
            };
            
            if(pathname === '/logout'){
                res.setHeader('Set-Cookie',cookieStr(0))
            }
            resolve();
        }
    })
}
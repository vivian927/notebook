/**
 * Created by coffee on 4月15日.
 */
const Cookie= require('cookie');
//设置白名单
const whiteName = ['/luyxyy'];

module.exports = (ctx)=>{
    let {pathname} = ctx.req;
    let {cookie} = ctx.req.headers;
    let {res,resCtx} = ctx;
    let cookieStr = time=>`name=luyxyy;Max-Age=${time}`;
    let cookieObj={};
    if (cookie) {
        cookieObj = Cookie.parse(cookie);
    } 
    
    return Promise.resolve({
        then:(resolve,reject)=>{          
            if(whiteName.indexOf(pathname) > -1){
                res.setHeader('Set-Cookie', cookieStr(3600));
            };
            if (cookieObj['name']){
                resCtx.hasUser = true;
                res.setHeader('Set-Cookie', cookieStr(3600));
            }
            if(pathname === '/logout'){
                res.setHeader('Set-Cookie',cookieStr(0))
            }
            resolve();
        }
    })
}
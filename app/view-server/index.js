/*
 *  view-server
 *  @Author
 */

// 映射表
// ejs 动态渲染
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const urlrewriteMap = require('./urlrewrite');
//路由 routes ==> controller ==> 结果 MVC
module.exports = (ctx) =>{
    let {resCtx} = ctx;
    let {pathname} = ctx.reqCtx;
    
    return Promise.resolve({
        then: (resolve,reject)=>{
            // console.log(pathname)
            if (pathname.match('action')||pathname.match(/\./)){
                resolve()
            } else {
                let viewPath = path.resolve(__dirname,'ejs');
                let ejsName = urlrewriteMap[pathname];
                if (ejsName) {
                    let layoutPath = path.resolve(viewPath,'layout.ejs');
                    let layoutHTML = fs.readFileSync(layoutPath,'utf8');

                    
                    let render = ejs.compile(layoutHTML,{
                        compileDebug: true,
                        filename: layoutPath
                    });
                    console.log(ejsName);
                    let html = render({
                        templateName: ejsName,
                        hasUser: resCtx.hasUser
                    });

                    // let htmlPath = path.resolve(viewPath,ejsName+'.ejs');
                    // let html = fs.readFileSync(htmlPath,'utf8');

                    resCtx.headers = Object.assign(resCtx.headers,{
                        'Content-Type': 'text/html'
                    });
                    resCtx.body = html;
                    resolve()
                } else {
                    resCtx.headers = Object.assign(resCtx.headers,{
                        'Location': '/'
                    });
                    resCtx.statusCode = 302;
                    resolve()
                }
            }
            

            
            // if ( urlMap[url] ){
            //     console.log(urlMap[url]);
            //     let {viewName} = urlMap[url];
                
                
            //     let tempStr = fs.readFileSync(htmlPath,'utf8');
            
            //     resCtx.body = render();
            //     resolve();
            // } else {
            //     console.log('nothing')
            //     resolve();
            // }
            
        }
    })
}
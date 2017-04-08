/**
 * Created by coffee on 3月18日.
 */
const fs = require('fs');
const path = require('path');

class App {
    constructor(){
        this.middlewareArr = [];
        //设计一个空的promise
        this.middlewareChain = Promise.resolve();
    }
    use(middleware){
        this.middlewareArr.push(middleware);
    }
    //create Promise
    composeMiddleware(context) {
        let {middlewareArr} = this;
        //根据中间件数组 创建promise链条
        for (let middleware of middlewareArr){
            this.middlewareChain = this.middlewareChain.then(()=>{
                return middleware(context);
            })
        }
        return this.middlewareChain
    }
    initServer(){
        //初始化工作
        return (request,response)=>{

            let context = {
                req: request,
                reqCtx: {
                    body: '', //post请求的数据
                    query: {}, //处理客户端get请求
                },
                res: response,
                resCtx: {
                    statusCode: 200,
                    statusMessage: 'resolve ok',
                    headers: {}, //response的返回报文
                    body: '', //返回给前端的内容区
                }
            };
            //Promise + request+response
            this.composeMiddleware(context)
                .then(()=>{
                    let {body,headers,statusCode,statusMessage} = context.resCtx;
                    let base= {'X-powered-by':'Node.js'};
                    response.writeHead(statusCode,statusMessage,Object.assign(base,headers));
                    response.end(body);
                })            
        }
    }
}
module.exports = App;
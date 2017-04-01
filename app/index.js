/**
 * Created by coffee on 3月18日.
 */
const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
const apiServer = require('./api');
const urlParser = require('./url-parser')
class App {
    constructor(){

    }
    initServer(){
        //初始化工作
        return (request,response)=>{
            request.context = {
                body: null,
                query: {},
                method: ''
            };
            urlParser(request).then(request=>{
                if (!request.context.body){
                    return apiServer(request)
                } else {
                    return request;
                }  
            }).then(request=>{
                if (!request.context.body){
                    return staticServer(request);
                } 
                return request;
            }).then(request=>{
                let header = {'X-powered-by':'nodejs'};
                let {body} = request.context;
                if (!(body instanceof Buffer)){
                    body = JSON.stringify(body);
                    header['Content-Type'] = 'application/json';
                } 
                response.writeHead(200,'ok',header);
                response.end(body);
            })
        }
    }
}
module.exports = App;
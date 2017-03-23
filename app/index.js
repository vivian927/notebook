/**
 * Created by coffee on 3月18日.
 */
const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
class App {
    constructor(){

    }
    initServer(){
        //初始化工作
        return (request,response)=>{
            let {url} = request;
            console.log(`======[${url}]======`);
            //根据url进行代码分发
            let body = staticServer(url);
            response.writeHead(200,'resolve ok',{'X-powered-by':'Node.js'});
            response.end(body);
        }
    }
}
module.exports = App;
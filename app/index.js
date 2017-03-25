/**
 * Created by coffee on 3月18日.
 */
const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
const apiServer = require('./api');
class App {
    constructor(){

    }
    initServer(){
        //初始化工作
        
        return (request,response)=>{
            let {url} = request;
            let body = '';
            let headers = {};
            if(url.match('action')){
                apiServer(url).then(val=>{
                    body = JSON.stringify(val);
                    headers = {'Content-Type': 'application/json'};  
                    let finalHeader = Object.assign(headers,{'X-powered-by':'nodejs'});
                    response.writeHead(200,'ok',finalHeader);
                    response.end(body);
                })
            } else{
                staticServer(url).then((body)=>{
                    let finalHeader = Object.assign(headers,{'X-powered-by':'nodejs'});
                    response.writeHead(200,'ok',finalHeader);
                    response.end(body);
                })
            } 
        }
    }
}
module.exports = App;
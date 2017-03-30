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
                body: '',
                query: {},
                method: 'get'
            };
            apiServer(request).then(val=>{

                if(!val){
                    //Promise
                    return staticServer(request);
                }else{
                    return val;
                }
            }).then(val=>{
                let base = {'X-powered-by':'nodejs'};
                let body = '';
                if (!(val instanceof Buffer)){
                    body = JSON.stringify(val);
                    let finalHeader = Object.assign(
                        base,
                        {'Content-Type': 'application/json'}
                    )
                    response.writeHead(200,'ok',finalHeader);
                } else {
                    body = val;
                }
                response.end(body);
            })
        }
    }
}
module.exports = App;
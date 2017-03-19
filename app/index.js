/**
 * Created by coffee on 3月18日.
 */
const fs = require('fs');


class App {
    constructor(){

    }
    initServer(){
        //初始化工作
        let _package = require('../package');
        return (request,response)=>{
            //每个请求逻辑
            fs.readFile('./public/index.html','utf8',(error,data)=>{
                response.end(JSON.stringify(_package));
            })
        }
    }
}
module.exports = App
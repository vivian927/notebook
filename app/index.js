/**
 * Created by coffee on 3月18日.
 */
const staticServer = require('./static-server');
const apiServer = require('./api');
function isAjax(url){
    if(url.match('action')){
        return true;
    } else {
        return false;
    }
}
class App {
    constructor(){}
    initServer(){
        return (request,response)=>{
            //apiServer().then(()=>{staticServer()})
            let {url} = request;
            let urlData = {
                url: url,
                isAjax: isAjax(url),
                data: null,
                headers: {'X-powered-by':'nodejs'}
            };
            staticServer(urlData).then(apiServer).then((urlData)=>{
                if (urlData.data){
                    response.writeHead(200,'resolve ok',urlData.headers);
                    response.end(urlData.data);      
                } else {
                    response.end('error');
                }
            });   
        }
    }
}
module.exports = App;
const path = require('path');
const fs = require('fs');
let getPath = (url) => path.resolve(process.cwd(),'public',`.${url}`);
let staticServer = (request) => {
    let {url,context} = request
    return new Promise((resolve,reject)=>{
        if (url == '/'){
                url = '/index.html';
        }
        let _path = getPath(url);
        let body = fs.readFile(_path,(err,data)=>{
            if (err) {
                resolve(`Read Files Wrong ${err.stack}`);
            }
            context.body = data;
            resolve(request);
        });
    })
}

module.exports = staticServer
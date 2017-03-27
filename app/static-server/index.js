const path = require('path');
const fs = require('fs');
let getPath = (url) => path.resolve(process.cwd(),'public',`.${url}`);
let staticServer = (urlData) => {
    
    return new Promise((resolve,reject)=>{
        if(!urlData.isAjax) {
            if (urlData.url == '/'){
                    urlData.url = '/index.html';
            }
            let _path = getPath(urlData.url);
            fs.readFile(_path,(err,data)=>{
                if (err) {
                    reject(`Read Files Wrong ${err.stack}`);
                }
                urlData.data = data;
                resolve(urlData);
            });
        } else {
            resolve(urlData);
        }
    })
}

module.exports = staticServer
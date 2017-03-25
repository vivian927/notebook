const path = require('path');
const fs = require('fs');
let getPath = (url) => path.resolve(process.cwd(),'public',`.${url}`);
let staticServer = (url) => {
    if (url == '/'){
                url = '/index.html';
            }
    let _path = getPath(url);
    let body = '';
    try {
        body = fs.readFileSync(_path);
    } catch(err){
        body = `Read Files Wrong ${err.stack}`
    }
    return body;
}

module.exports = staticServer
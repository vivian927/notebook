
module.exports=(urlData)=>{
    if(urlData.isAjax) {
        let apiMap = {
            '/list.action':['animal','pork','chicken'],
            '/user.action':['moli','creed', 'china']
        };
        urlData.data = JSON.stringify(apiMap[urlData.url]);
        let finalHeader = Object.assign(urlData.headers,{'Content-Type': 'application/json'});
        urlData.headers = finalHeader;
    } 
    return Promise.resolve(urlData);
}
/**
 * Created by coffee on 3月18日.
 */
const http = require('http');
const PORT = 7000;
const App = require('./app');
const server = new App();
//middleware
const staticServer = require('./app/static-server');
const apiServer = require('./app/api');
const urlParser = require('./app/url-parser')
server.use(urlParser);
server.use(apiServer);
server.use(staticServer);

//start app
http.createServer(server.initServer()).listen(PORT,()=>{
    console.log('listening on ',PORT);
})
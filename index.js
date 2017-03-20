/**
 * Created by coffee on 3月18日.
 */
const http = require('http');
const PORT = 7000;
const App = require('./app');
const server = new App();
http.createServer(server.initServer()).listen(PORT,()=>{
    console.log('listening on ',PORT);
})
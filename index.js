/**
 * Created by coffee on 3月18日.
 */
const http = require('http');
const PORT = 7000;
const App = require('./app');
const server = new App();

//middleware
const cookieParser = require('./app/cookie-parser');
const staticServer = require('./app/static-server');
const apiServer = require('./app/api');
const urlParser = require('./app/url-parser')
const viewServer = require('./app/view-server');


server.use(urlParser);
server.use(cookieParser);
server.use(apiServer);
server.use(staticServer);
server.use(viewServer);

const mongoose = require('mongoose')
// Use native promises
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/blogDB')
mongoose.connection.on('error', ()=>{
    console.log(`error happended for db`)
}).once('open', ()=>{
    console.log('mongoDB connected !')
})
//start app
http.createServer(server.initServer()).listen(PORT,()=>{
    console.log('listening on ',PORT);
}).on('error',err=>{
    console.log(`Error! ${err.message}`)
});
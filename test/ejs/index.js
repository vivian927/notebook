const path = require('path')
const ejs = require('ejs');


const html = `hello
    <% if(world.match('x')){ %>
    <%- world %>
    <%- include('test') %>
    <% } %>
    <%= hhh%>`;
let world = 'xxxxxx';

//将字符串转换为function
const f1 = ejs.compile(html,{
    filename: path.resolve(__filename),
    compileDebug: true
});


console.log(f1({
    world: world,
    hhh: '<script>alert(1)</script>'
}));

// <% %> 逻辑运算
// <%- %> unescape
// <%= %> escaple
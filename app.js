const http = require('http');
http.createServer((req,res)=>
{
    res.write(`<h1> Welcome to my node js server</h1>`);
    res.end();
}).listen(4000);

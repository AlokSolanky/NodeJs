const http = require('http');
http.createServer((req,res)=>
{
    if(req.url === "/")
    {
        res.write(`<h1>Welcome Home</h1>`);
    }
    else if (req.url === "/about") {
      res.write(`<h1> welcome to about page</h1>`);
    }
    else if (req.url === "/node") {
      res.write(`<h1> welcome to my node js project</h1>`);
    }
    res.end();
}).listen(4000);

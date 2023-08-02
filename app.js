const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>
{
    if(req.url === "/")
    {   let d = fs.readFileSync("message.txt","utf-8");
        res.write(`<body>`);
        res.write(`<p>${d}</p>`);
        res.write(`<form method="POST" action="/message"><input type="text" name="message" required><button type="submit">Send</button></form>`);
        res.write(`</body>`);
    }
    else if (req.url === "/message" && req.method === "POST") {
      const body = [];
      req.on('data',(chunk)=>
      {
        body.push(chunk);
      });
      req.on('end',()=>
      {
        const parsed = Buffer.concat(body).toString().split("=")[1];
        fs.writeFileSync("message.txt", parsed);
      })
      
      res.statusCode = 302;
    //   res.write("Submitted");
      res.setHeader('Location','/');
      res.end();
    }
    res.end();
}).listen(4000);

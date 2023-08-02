const http = require('http');
const route = require('./routes');
http.createServer(route).listen(4000);

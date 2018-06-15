//Simple HTTP App

var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hi everybody!');
});

var porta = process.env.PORT || 8080;
server.listen(porta);
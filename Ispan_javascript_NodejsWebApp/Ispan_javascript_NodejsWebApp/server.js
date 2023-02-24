'use strict';
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;
const PORT = 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    /*res.end('Hello World\n');*/
//    res.end(Page1.html);
//}).listen(port);


fs.readFile('Page1.html', function (err, html) {

    if (err) throw err;
    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(PORT);
});
const colors = require('colors');
const http = require('http')
//
// Target Http Server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('request successfully proxied to user : ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.end()
}).listen(9001)

//
// Target Http Server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('request successfully proxied to post : ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.end()
}).listen(9002)

//
// Target Http Server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('request successfully proxied to message : ' + req.url + '\n' + JSON.stringify(req.headers, true, 2))
  res.end()
}).listen(9003)

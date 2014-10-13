'use strict';
var express = require('express');
var app = express()
  .use(require('connect-livereload')({ port: 35729 }))
  .use(require('serve-static')('app'))
  .use(require('serve-static')('.tmp'))
  .use(require('serve-index')('app'));

require('http').createServer(app)
  .listen(9000)
  .on('listening', function () {
    console.log('Started connect web server on http://localhost:9000');
  });

console.log('ready');

process.on('message', function(data){
  console.log('hi');
  process.send({mess: 'hi'});
});

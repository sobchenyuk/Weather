var static = require('node-static');

var fileServer = new static.Server('./');

require('http').createServer(function (request, response) {
	request.addListener('end', function () {
		fileServer.serve(request, response);
	}).resume();
}).listen(8080);


var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname + "./");
require("nodeversioncheck");
var express = require('express');
var compression = require('compression');
var path = require('path');
var app = express();
var http = require('http').Server(app);

app.disable('x-powered-by');
app.use(compression());
app.use(express.static(path.join(__dirname, 'favicon')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'public')));
var port = process.env.PORT || 7899;
http.listen(port, function () {
	console.log('listening on http://localhost:%s', port);
});
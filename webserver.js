var http = require('http');
var s = http.createServer(function(req, res){
	res.end("<b>Thanks for calling!</b>");
});


s.listen(8080);

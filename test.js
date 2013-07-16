var http = require("http");
var getClientIP = require("./getClientIP");
var getClientUserAgent = require("./getClientUserAgent.js");

function onRequest(request, response) {
	var postData = "";
//	var pathname = url.parse(request.url).pathname;
	var ip = getClientIP(request);
	console.log("Request from " + ip + " received.");
	console.log("user_agent = " + getClientUserAgent(request) );
	
//	route(handler, pathname, response, request);

//		request.setEncoding("utf8");
//
//		request.addListener("data", function(postDataChunk) {
//			postData += postDataChunk;
//			console.log("Received POST data chunk '" + postDataChunk + "'.");
//		});

//		request.addListener("end", function() {
//			route(handler, pathname, response, postData);
//		});
}

http.createServer(onRequest).listen(8888);

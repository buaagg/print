module.exports = function(request) {
//	console.log(request)
	var headers = request.headers;
	console.log(headers);
	var ipAddress = headers['x-real-ip'] || headers['x-forwarded-for'] ||  request.connection.remoteAddress;
	return ipAddress;
}

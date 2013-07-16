module.exports = function(request) {
	return request.headers['user-agent'] || "unknown";
}

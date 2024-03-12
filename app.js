const http = require("http");

http
	.createServer(function (req, res) {
		res.end("NodeJs Intro");
	})
	.listen(3000, function () {
		console.log("Running server in 3000");
	});

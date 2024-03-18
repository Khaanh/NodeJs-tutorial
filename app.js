const http = require("http");
const PORT = 3003;

// http
// 	.createServer((req, res) => {
// 		res.setHeader("Content-type", "text/html; charset=utf-8;");

// 		if (req.url === "/home" || req.url === "/") {
// 			res.write("<h1>Home</h1>");
// 		} else if (req.url == "/about") {
// 			res.write("<h1>About</h1>");
// 		} else if (req.url == "/contact") {
// 			res.write("<h1>Contact</h1>");
// 		} else {
// 			res.write("<h2>Not found</h2>");
// 		}

// 		res.end();
// 	})
// 	.listen(PORT, () => {
// 		console.log(`localhost:${PORT}`);
// 	});

http
	.createServer((req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8;");

		if (req.url === "/") {
			res.statusCode = 302; // временная переадресация
			// на адрес localhost:3003/newpage

			res.setHeader("Location", "/newpage");
		} else if (req.url == "/newpage") {
			res.write("New address");
		} else {
			res.statusCode = 404; // address not found
			res.write("Not Found");
		}

		res.end();
	})
	.listen(PORT);

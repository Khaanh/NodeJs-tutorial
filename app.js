const http = require("http");
const fs = require("fs");
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

// http
// 	.createServer((req, res) => {
// 		res.setHeader("Content-Type", "text/html; charset=utf-8;");

// 		if (req.url === "/") {
// 			res.statusCode = 302; // временная переадресация
// 			// на адрес localhost:3003/newpage

// 			res.setHeader("Location", "/newpage");
// 		} else if (req.url == "/newpage") {
// 			res.write("New address");
// 		} else {
// 			res.statusCode = 404; // address not found
// 			res.write("Not Found");
// 		}

// 		res.end();
// 	})
// 	.listen(PORT, () => {
// 		console.log(`PORT: ${PORT}`);
// 	});

// http
// 	.createServer((req, res) => {
// 		console.log(`Запрошенный адрес: ${req.url}`);
// 		// получаем путь после слеша

// 		const filePath = req.url.substring(1);

// 		fs.readFile(filePath, function (error, data) {
// 			if (error) {
// 				res.statusCode = 404;
// 				res.end("Resourse not found");
// 			} else {
// 				res.end(data);
// 				console.log(data);
// 			}
// 		});
// 	})
// 	.listen(PORT, () => {
// 		console.log(`Server started at: ${PORT}`);
// 	});

http
	.createServer((req, res) => {
		const filePath = req.url.substring(1);

		fs.readFile(filePath, (error, data) => {
			if (error) {
				res.statusCode = 404;
				res.end("Not found");
			} else {
				const message = "Learning message";
				const header = "header block";
				const dataText = data
					.toString()
					.replace(/{header}/g, header)
					.replace(/{message}/g, message);
				res.end(dataText);
			}
		});
	})
	.listen(PORT, () => {
		console.log(`Server started at ${PORT}`);
	});

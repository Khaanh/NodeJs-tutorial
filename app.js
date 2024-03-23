const http = require("http");
const fs = require("fs");
const PORT = 3005;

http
	.createServer(async (req, res) => {
		if (req.url === "/user") {
			let body = "";
			console.log("body: ", body);

			for await (const chunk of req) {
				body += chunk;
				console.log("chunk: ", chunk);
			}

			let userName = "";
			let userAge = 0;

			const params = body.split("&");
			console.log("params: ", params);

			for (param of params) {
				const [paramName, paramAge] = param.split("=");
				if (paramName === "userName") userName = paramName;
				if (paramAge === "userAge") userAge = paramAge;
				res.write(`Your name: ${paramName}. Your age: ${paramAge}`);
			}
			res.end();
		} else {
			fs.readFile("index.html", (_, data) => res.end(data));
		}
	})
	.listen(PORT, () => console.log(`Server running on ${PORT}`));

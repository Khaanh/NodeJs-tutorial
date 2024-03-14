// // const { greeting } = require("./greeting");
// const greeting = require("./greeting");

// global.userName = "Khanh";

// // global.console.log(date);
// console.log(greeting.printMessage());

// Передача параметров приложению
// const nodePath = process.argv[0];
// const appPath = process.argv[1];
// const username = process.argv[2];
// const userage = process.argv[3];

// console.log("nodePath", nodePath);
// console.log("appPath", appPath);
// console.log();
// console.log("name", username);
// console.log("age", userage);

const http = require("http");

const text = "Hello World";
const PORT = 3003;

http
	.createServer((req, res) => {
		console.log(text);
		res.end(text);
	})
	.listen(PORT, () => console.log(`running server`));

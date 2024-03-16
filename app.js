// const EventEmitter = require("events");

// // определяем эмиттер событий
// const emitter = new EventEmitter();

// // имя события, которое будет обрабатываться
// const eventName = "greet";

// emitter.on(eventName, () => {
// 	console.log("Hello World");
// });

// // генерируем событие greet;
// emitter.emit(eventName);
const http = require("http");
const fs = require("fs");

const PORT = 3003;

http
	.createServer((req, res) => {
		res.end("Hello");
	})
	.listen(PORT, () => {
		// console.log("Server running in 3003");
	});

// const writeableStream = fs.createWriteStream("hello.txt");
// writeableStream.write("Привет мир!\n");
// writeableStream.write("Продолжение записи\n");
// writeableStream.end("Завершение записи\n");

// const readableStream = fs.createReadStream("hello.txt");
// readableStream.on("data", function (chunk) {
// 	console.log("ssssssssssssssssssssssss");
// 	console.log("chunk: ", chunk.toString());
// });

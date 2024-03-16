// // const { greeting } = require("./greeting");
// const greeting = require("./greeting");

// global.userName = "Khanh";

// // global.console.log(date);
// console.log(greeting.printMessage());

const { error } = require("console");
const fs = require("fs");

const data = "\nHello Node.js\n";

// fs.readFile("./hello.txt", (error, data) => {
// 	if (error) {
// 		console.log(error);
// 	}
// 	console.log(data.toString());
// });

// console.log("Асинхронное чтение файла");

// fs.writeFile("./hello.txt", data, { flag: "a" }, (error) => {
// 	if (error) {
// 		console.log(error);
// 	}

// 	console.log("Файл успешно записан");
// });

// fs.appendFile("./hello.txt", data, (error) => {
// 	if (error) {
// 		console.log(error);
// 	}

// 	console.log("Файл успешно записан");
// });

// fs.stat("./hello.txt", (error, stats) => {
// 	console.log(stats.isFile());
// 	console.log(stats.isDirectory);
// 	console.log(stats);
// });

// fs.unlink("./hello.txt", (error) => {
// 	if (error) console.log(error);

// 	console.log("File has deleted");
// });

// fs.mkdir("test", (error) => {
// 	console.log("file created");
// });

// fs.readdir("./test", (error, files) => {
// 	console.log("files: ", files);
// });

// fs.open("./test/first.txt", "w", (error) => {
// 	console.log(error);
// });

// fs.writeFile("./test/first.txt", "second line", (error) => {
// 	console.log(error);
// });

// fs.writeFile("./test/first.txt", "\n3 line", { flag: "a" }, (e) => {
// 	console.log(e);
// });

// fs.unlink("./test/first.txt", (e) => {
// 	if (e) console.log(e);

// 	console.log("File deleted");
// });

// fs.rmdir("./test/", (e) => {
// 	if (e) return console.log(e);

// 	console.log("Folder deleted");
// });

const express = require("express");

const app = express();
const PORT = 3000;

app.use(function (_, _, next) {
	console.log("Middleware 1");
	next();
});

app.use("/about", function (_, res) {
	console.log("Middleware 2");
	res.send("About Middleware 2");
});

app.get("/", function (_, res) {
	console.log("Route /");
	res.send("Hello");
});

app.listen(PORT, console.log(`Running server ${PORT}`));

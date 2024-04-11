const express = require("express");
const app = express();

app.use(function (_, res) {
	// res.send("<h2>Hello</h2>");
	// res.send({ id: 6, name: "Tom" });
	// res.send(["Tom", "Bob", "Sam"]);
	res.send(Buffer.from("Hello Express"));
});

app.listen(3000);

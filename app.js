const os = require("os");
// const { greeting } = require("./greeting");
const { date, greeting } = require("./greeting");

//get current user name
const userName = os.userInfo().username;

// console.log(`Дата запроса: ${greeting.date}`);
console.log(`Дата запроса: ${date}`);
greeting.printMessage(userName);

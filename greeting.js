const currentDate = new Date();
global.date = currentDate;

exports.printMessage = function () {
	const hour = currentDate.getHours();

	if (hour > 16) {
		console.log(`Добрый вечер ${global.userName}`);
	} else if (hour > 10) {
		console.log(`Добрый день ${userName}`);
	} else {
		console.log(`Доброе утро ${userName}`);
	}
};

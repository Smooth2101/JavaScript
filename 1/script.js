let money = prompt("Ваш бюджет на месяц", "");
	time = prompt('Введите дату в формате YYY-MM-DD', ""),
	answay1 = prompt('Введите обязательную статью расходов в этом месяце', ""),
	answay2 = prompt('Во сколько обойдется?', "");

let appData = {
	bud: money,
	timeData: time,
	expenses: { answay1: answay2 },
	optionalExpenses: "",
	income: "",
	savings: false
};

alert('Бюджет на 1 день = ' + (money/30));



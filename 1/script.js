let money = prompt("Ваш бюджет на месяц", "");
	time = prompt('Введите дату в формате YYY-MM-DD', "");

let answay1 = prompt('Введите обязательную статью расходов в этом месяце', ""),
	answay2 = prompt('Во сколько обойдется?', ""),
	answay3 = prompt('Введите обязательную статью расходов в этом месяце', ""),
	answay4 = prompt('Во сколько обойдется?', "");

let appData = {
	bud: money,
	timeData: time,
	expenses: {},
	optionalExpenses: "",
	income: "",
	savings: false
};

appData.expenses[answay1] = answay2;
appData.expenses[answay3] = answay4;



alert('Бюджет на 1 день = ' + (money/30));


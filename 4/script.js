let money, time;
								// Функция ввода начальных данных
function start() {
	money = +prompt("Ваш бюджет на месяц", "");
	time = prompt('Введите дату в формате YYY-MM-DD', "");

	while (isNaN(money) || money==""|| money==null) {
		money = +prompt("Ваш бюджет на месяц", "");
	}
}
start();

let appData = {
	bud: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: {},
	savings: true,
	chooseOptExpenses: function () {
		for (let i = 0; i < 2; i++){
			let a = prompt('Введите обязательную статью расходов в этом месяце', ""),
				b = prompt('Во сколько обойдется?', "");
			
			if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null
				&& a != '' && b != '' && a.length < 50) {
				console.log("done");
				appData.expenses[a] = b;
			} else {
				console.log("warring");
				i--;
			}
	
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.bud / 30).toFixed();
		alert('Бюджет на 1 день = ' + (appData.moneyPerDay));
	},
	detectLevel: function () {
		if (appData.moneyPerDay <=100) {
		console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Ошибка");
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какая сумма накомлений"),
				persent = +prompt("Какой процент");
			
			appData.monthIncome = save / 100 / 12 * persent;
			alert("Доход составляет = " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function () {
		for (let i = 0; i < 3; i++){
			let a = prompt('Статья необязательных расходов', "");
			
			if (typeof (a) === "string" && typeof (a) != null && a != '' && a.length < 50) {
				console.log("done");
				appData.optionalExpenses[i] = a;
			} else {
				console.log("warring");
				i--;
			}
	
		}
	},
	chooseIncome: function () {
		let items = prompt('Что принесет дополнительный доход? (Перечислить через запятую)', '');
		
		if (typeof (items) == "string" && typeof (items) != null && items != '') {
			console.log("done")
		} else {
			console.log("warring");
		}
		appData.income = items.split(', ');
		appData.income.push(prompt('Может еще?'));
		appData.income.sort();

		appData.income.forEach(function (itemmassive, i) {
			alert("Способы доп. заработка: " + (i+1) + '-' + itemmassive);
		});
	}  
};

for (let key in appData) {
		console.log('Наша программа включает в себя данные:' + key);
	}
let
	inp = document.getElementsByClassName('expenses-item'), // обязательные расходы
	ud = document.getElementsByTagName('button'), //кнопки
	optional = document.querySelectorAll('.optionalexpenses-item'), // необязательные рассходы
	choose = document.querySelector('.choose-income'), // возможные доходы
	saving = document.querySelector('#savings'), // накопления
	sumV = document.querySelector('.choose-sum'), // сумма
	procV = document.querySelector('.choose-percent'), // процент
	year = document.querySelector('.year-value'), // год
	month = document.querySelector('.month-value'), // месяц
	day = document.querySelector('.day-value'), // день
	but = document.getElementById('start'), // начать рассчет

	budget = document.getElementsByClassName('budget-value'),
	budgetDay = document.getElementsByClassName('daybudget-value'),
	level = document.getElementsByClassName('level-value'),
	expenses = document.getElementsByClassName('expenses-value'),
	optionalEx = document.getElementsByClassName('optionalexpenses-value'),
	income = document.getElementsByClassName('income-value'),
	monthSaving = document.getElementsByClassName('monthsavings-value'),
	yearSaving = document.getElementsByClassName('yearsavings-value');

let summa = 0;
	console.log(ud);
let money, time;

ud[0].disabled = true;
ud[1].disabled = true;
ud[2].disabled = true;

// кнопка начала рассчета и ввода бюджета и даты
but.addEventListener('click', function () {
	time = prompt('Введите дату в формате YYY-MM-DD', "");
	money = +prompt("Ваш бюджет на месяц", "");

	
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц", "");
	}
	appData.bud = money;
	appData.timeData = time;
	budget[0].textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();
	ud[0].disabled = false;
	ud[1].disabled = false;
	ud[2].disabled = false;	
});
// кнопка рассчета и окно ввода обязательных рассходов и вывода их суммы
ud[0].addEventListener('click', function () {
	
	for (let i = 0; i < inp.length; i++) {
		let a = inp[i].value,
			b = inp[++i].value;

		if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null &&
			a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
			summa += +b;
		} else {
			expenses[0].textContent = "Введите обязательные расходы";
			console.log("warring");
			i--;
		}
	}
	expenses[0].textContent = summa;
});
// Кнопка необязательных рассходов
ud[1].addEventListener('click', function () {  
	for (let i = 0; i < optional.length; i++) {
		let a = optional[i].value;

		appData.optionalExpenses[i] = a;
		optionalEx[0].textContent += appData.optionalExpenses[i] + ' ';
	}
});
// Кнопка расчета дневного бюджета и уровня достатка и вывода в окно
ud[2].addEventListener('click', function () {
	if (appData.bud != undefined) {
		appData.moneyPerDay = ((appData.bud-summa) / 30).toFixed();
		budgetDay[0].textContent = appData.moneyPerDay;

		if (appData.moneyPerDay <= 100) {
			level[0].textContent = "Минимальный уровень достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			level[0].textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			level[0].textContent = "Высокий уровень достатка";
		} else {
			level[0].textContent = "Ошибка";
		}
	} else {
		budgetDay[0].textContent = "Ошибка! Нажмите Начать расчет";
	}
});
 // Окно ввода дополнительного дохода
choose.addEventListener('input', function () {
	let items = choose.value;

	appData.income = items.split(', ');
	income[0].textContent = appData.income;
});
// Включение накомплений check-box
saving.addEventListener('input', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});
// Окно ввода суммы накоплений
sumV.addEventListener('input', function () {
	if (appData.savings == true){
		let sum = +sumV.value,
			persent = +procV.value;
		appData.monthIncome = sum / 100 / 12 * persent;
		appData.yearIncome = sum / 100 * persent;
		monthSaving[0].textContent = appData.monthIncome.toFixed(1);
		yearSaving[0].textContent = appData.yearIncome.toFixed(1);
	}
});
//  Окно ввода процента 
procV.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumV.value,
			persent = +procV.value;
		appData.monthIncome = sum / 100 / 12 * persent;
		appData.yearIncome = sum / 100 * persent;
		monthSaving[0].textContent = appData.monthIncome.toFixed(1);
		yearSaving[0].textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	bud: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: {},
	savings: false,
}
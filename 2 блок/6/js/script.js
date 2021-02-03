let
	inp = document.getElementsByClassName('expenses-item'), // обязательные расходы
	ud = document.getElementsByTagName('button'), //кнопки
	optional = document.querySelectorAll('.optionalexpenses-item'), // необязательные рассходы
	choose = document.querySelector('.choose-income'), // возможные доходы
	saving = document.querySelector('#savings'), // накопления
	sum = document.querySelector('.choose-sum'), // сумма
	proc = document.querySelector('.choose-percent'), // процент
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
		


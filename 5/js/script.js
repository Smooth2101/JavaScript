let text = document.querySelectorAll('.title'),
	column = document.querySelectorAll('.column'),
	adv = document.querySelectorAll('.adv'),
	menu = document.querySelectorAll('.menu'),
	item = document.querySelectorAll('.menu-item'),
	quest = document.getElementById('prompt'),
	div = document.createElement('li');
// Востановлен порядок и добавлен еще один элемент
div.classList.add('menu-item');
menu[0].appendChild(div);
div.innerText = 'Пятый пункт';
menu[0].insertBefore(item[2], item[1]);
// Заменена фоновая картинка
document.body.style.background = 'url(../img/apple_true.jpg)';
// Изменен текст заголовка
text[0].innerHTML = 'Мы продаем только подлинную технику Apple';
// Удален блок с рекламой
column[1].removeChild(adv[0]);

let a = prompt('Отношение к текнике Apple');
quest.textContent = a;

//! Урок-07 - приклад використання бібліотеки Handlebars в проєкті Vite
console.log("Підключено скрипт lesson-07.js");

import '../css/reset.css'
import '../css/lesson-07.css'

console.log(
    "%c LESSON-07 - Використання бібліотеки Handlebars ",
    "color: white; background-color: #D33F49",
);

//! Handlebars
console.warn("Бібліотека Handlebars:");
import Handlebars from 'handlebars/runtime';
// import template from './template.hbs';
import template from '../handlebars/template.hbs';


const menuData = {
    title: 'Eat it createElement, templates rule!',
    items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html']
};

// const source = document.querySelector('#menu-template').innerHTML.trim();
// const template = Handlebars.compile(source);

/*
  Создадим переменную markup, в которую запишем 
  результат работы функции-шаблона template
*/
const markup = template(menuData);

console.log(markup); // магия
/*
  Пример выше похож на операцию «поиск-и-замена»: шаблон просто 
  заменил {{title}} на значение свойства menuData.title. 
  После чего в результат попал сначала текст <ul>, 
  потом выполнился {{#each items}}, который последовательно 
  сгенерировал элементы списка, и затем список был закрыт </ul>.
*/

/*
  В js выберем контейнер по id, после чего используя 
  свойство innerHTML присвоим туда нашу строку.
*/
const container = document.querySelector('#menu-container');
container.innerHTML = markup;


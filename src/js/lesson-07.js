//! Урок-07 - приклад використання бібліотеки Handlebars в проєкті Vite
console.log("Підключено скрипт lesson-07.js");

// import '../css/reset.css'
// import '../css/lesson-07.css'

console.log(
    "%c LESSON-07 - Використання бібліотеки Handlebars ",
    "color: white; background-color: #D33F49",
);


// //! Handlebars
console.warn("Бібліотека Handlebars:");
// //! var.2 Приклад використання Handlebars з конспекту
import Handlebars from 'handlebars';

// const menuData2 = {
//     title: '2.Eat it createElement, templates rule!',
//     items: ['Handlebars-2', 'LoDash-2', 'Pug-2', 'EJS-2', 'lit-html-2']
// };

// const source = document.querySelector('#menu-template').innerHTML.trim();
// const template2 = Handlebars.compile(source);

// //? Створимо змінну markup, в яку запишемо 
// //? результат роботи функції-шаблону template.
// const markup2 = template2(menuData2);

// console.log(markup2); //? Вся розмітка

// //? Приклад вище схожий на операцію «пошук-і заміна»: шаблон просто
// //? замінив {{title}} значення властивості menuData.title.
// //? Після чого результат потрапив спочатку текст <ul>,
// //? потім виконався {{#each items}}, який послідовно
// //? згенерував елементи списку, а потім список був закритий </ul>.


// //? У js виберемо контейнер по id, після чого використовуючи 
// //? властивість innerHTML додємо туди наш рядок.

// const menuСontainer = document.querySelector('#menu-container');
// menuСontainer.innerHTML = markup2;
// //! ______________________________________________________________________________





// //!: var.3 Використання Handlebars вручну (без Vite-плагіну)
// // import Handlebars from 'handlebars';

// const menuData3 = {
//     title: '3.Eat it createElement, templates rule!',
//     items: ['Handlebars-3', 'LoDash-3', 'Pug-3', 'EJS-3', 'lit-html-3'],
// };
// const containerHandlebars03 = document.querySelector(".handlebars-var03");
// console.log("containerHandlebars03:", containerHandlebars03 );

// async function renderTemplate() {
//     const res = await fetch('../handlebars/template.hbs');
//     const templateText = await res.text();

//     const template = Handlebars.compile(templateText);
//     const renderedHTML = template(menuData3);

//     containerHandlebars03.innerHTML = renderedHTML;
// };

// renderTemplate();
// //! ______________________________________________________________________________





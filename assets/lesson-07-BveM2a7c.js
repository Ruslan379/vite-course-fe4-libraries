import"./reset-CdHmiPVj.js";//! Урок-07 - приклад використання бібліотеки Handlebars в проєкті Vite
console.log("Підключено скрипт lesson-07.js");console.log("%c LESSON-07 - Використання бібліотеки Handlebars ","color: white; background-color: #D33F49");//! Handlebars
console.warn("Бібліотека Handlebars:");const o={title:"Eat it createElement, templates rule!",items:["Handlebars","LoDash","Pug","EJS","lit-html"]},n=document.querySelector("#menu-template").innerHTML.trim(),t=Handlebars.compile(n),e=t(o);console.log(e);const l=document.querySelector("#menu-container");l.innerHTML=e;

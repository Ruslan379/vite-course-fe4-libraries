//! PNotify
// todo:- Документація через NPM
// import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

// todo:- ChatGPT через NPM
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

console.log("JS-модуль:  main.js через NPM");

//? Инициализация мобильного модуля
defaultModules.set(PNotifyMobile, {});

//? Пример уведомления
alert({
    text: 'Hello from PNotify!',
    type: 'success'
});

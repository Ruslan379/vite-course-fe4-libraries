import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
//! Бібліотека Handlebars
import handlebars from 'vite-plugin-handlebars';
// import { resolve } from 'path';


export default defineConfig({
  base: '/vite-course-fe4-libraries/', //! 👈 ВАЖЛИВО: вкажіть базу
  root: 'src',
  build: {
    rollupOptions: {
      //! ❌ Це шукає тільки HTML-файли верхнього рівня src/, і не включає HTML-файли нижнього рівня
      // input: glob.sync('./src/*.html'),
      //! ✅ Це шукає ВСІ HTML-файли, включаючи HTML-файли нижнього рівня
      input: glob.sync('./src/**/*.html'),
    },
    outDir: '../dist',
    //todo: var.3 Використання Handlebars вручну (без Vite-плагіну)
    // emptyOutDir: true,
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html']),
    //! Бібліотека Handlebars
    // handlebars()

    // handlebars({
    //   partialDirectory: resolve(__dirname, 'src/handlebars')
    // })

    // handlebars({
    //   include: '**/*.hbs',
    //   runtime: 'handlebars/runtime',
    // })

    // handlebars({
    //   partialDirectory: resolve(__dirname, 'src/handlebars'),
    //   include: '**/*.hbs',
    //   runtime: 'handlebars/runtime',
    // })

    //todo: var.1: Використання vite-plugin-handlebars лише у index.html
    handlebars({
      context: {
        title: 'Головна сторінка',
        items: ['Про нас', 'Контакти', 'Послуги']
      }
    })
  ],
});

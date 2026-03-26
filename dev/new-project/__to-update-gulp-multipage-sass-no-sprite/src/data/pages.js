'use strict';

const author = 'Artem Dots';
const themeColor = '#ffffff';
const ieBung = false;

// Шрифты для preload в <head> — указывать .woff2 имена
// ИНСТРУКЦИЯ: после добавления .ttf в src/assets/fonts/
// gulp сконвертирует их в .woff и .woff2, добавь сюда имена .woff2 файлов
const fontsPreload = [
  'Circe-Bold.woff2',
  'Circe-Regular.woff2',
  'Circe-Light.woff2',
];

// URL страницы определяется автоматически в миксине меню: key + '.html'
// Для дочерних страниц URL = slug + '.html'
const pages = {
  index: {
    name: 'Главная',
    title: 'Главная - Название',
    descr: '',
    author,
    isMenuItem: true,
  },
  page2: {
    name: 'Страница-2',
    title: 'Страница-2 - Название',
    descr: '',
    author,
    isMenuItem: true,
    isMenuItemHasChildren: {
      page21: {
        name: 'Страница 2-1',
        title: 'Страница 2-1 - Название',
        descr: '',
        fileStem: 'child-page',
        slug: 'child-page-21',
        author,
        isMenuItem: true,
      },
      page22: {
        name: 'Страница 2-2',
        title: 'Страница 2-2 - Название',
        descr: '',
        fileStem: 'child-page',
        slug: 'child-page-22',
        author,
        isMenuItem: true,
      },
      page23: {
        name: 'Страница 2-3',
        title: 'Страница 2-3 - Название',
        descr: '',
        fileStem: 'child-page',
        slug: 'child-page-23',
        author,
        isMenuItem: true,
      },
      page24: {
        name: 'Страница 2-4',
        title: 'Страница 2-4 - Название',
        descr: '',
        fileStem: 'child-page',
        slug: 'child-page-24',
        author,
        isMenuItem: true,
      },
      page25: {
        name: 'Страница 2-5',
        title: 'Страница 2-5 - Название',
        descr: '',
        fileStem: 'child-page',
        slug: 'child-page-25',
        author,
        isMenuItem: true,
      },
    },
  },
  page3: {
    name: 'Страница 3',
    title: 'Страница 3 - Название',
    descr: '',
    author,
    isMenuItem: true,
  },
  page4: {
    name: 'Страница 4',
    title: 'Страница 4 - Название',
    descr: '',
    author,
    isMenuItem: true,
  },
  page5: {
    name: 'Страница 5',
    title: 'Страница 5 - Название',
    descr: '',
    author,
    isMenuItem: true,
  },
};

module.exports = { author, themeColor, ieBung, fontsPreload, pages };

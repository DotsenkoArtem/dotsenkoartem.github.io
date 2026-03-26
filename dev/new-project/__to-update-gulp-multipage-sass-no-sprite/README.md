# Gulp Multipage — Pug + Sass

Шаблон многостраничного сайта на Gulp 4, Pug, Sass (indented syntax).

## Быстрый старт

```bash
npm install
cp .env.example .env   # заполнить YANDEX_MAPS_API_KEY
npm run dev            # сборка + watch + BrowserSync
```

## Команды

| Команда | Описание |
|---|---|
| `npm run dev` | Сборка, watch, BrowserSync |
| `npm run dev:lite` | Сборка + watch (без BrowserSync) |
| `npm run build` | Продакшн-сборка (NODE_ENV=production) |
| `npm run clean` | Удалить папку `public/` |

## Структура

```
src/
├── assets/
│   ├── fonts/          # .ttf → gulp конвертирует в .woff/.woff2
│   ├── img/            # jpg/png/svg → минификация, png → webp
│   └── libs/           # сторонние библиотеки (копируются as-is)
├── data/
│   └── pages.js        # данные сайта: pages, fontsPreload, themeColor и т.д.
├── js/                 # скрипты (→ .js, .dev.js, .dev.min.js)
├── php/                # PHP-скрипты (копируются as-is)
├── pug/
│   ├── _includes/      # header, footer, head, ie-bung
│   ├── _mixins/        # миксины (меню и т.д.)
│   ├── _templates/     # базовый layout (_base.pug)
│   ├── _vars/          # _vars.pug (только комментарий, данные в src/data/pages.js)
│   └── pages/          # страницы → компилируются в public/*.html
│       └── child-page.pug  # шаблон дочерних страниц (не компилируется напрямую)
└── styles/sass/        # главный файл main.sass + парциалы
```

## Добавление страниц

### Обычная страница

1. Создать `src/pug/pages/my-page.pug` на основе существующей страницы
2. Добавить запись в `src/data/pages.js` в объект `pages`:
   ```js
   myPage: {
     name: 'Моя страница',
     title: 'Моя страница - Название',
     descr: '',
     author,
     isMenuItem: true,
   }
   ```
3. В `my-page.pug` прописать `let page = pages.myPage`

Или использовать scaffold-скрипт:
```bash
node scripts/new-page.js my-page "Моя страница"
```

### Дочерняя страница

Добавить запись в `isMenuItemHasChildren` нужного родителя в `src/data/pages.js`:
```js
myChild: {
  name: 'Дочерняя',
  title: 'Дочерняя - Название',
  descr: '',
  fileStem: 'child-page',   # имя pug-шаблона в src/pug/pages/
  slug: 'my-child',         # имя выходного HTML-файла
  author,
  isMenuItem: true,
}
```
Gulp автоматически сгенерирует `public/my-child.html`.

## Шрифты

1. Положить `.ttf` в `src/assets/fonts/`
2. Gulp сконвертирует в `.woff` и `.woff2` и скопирует в `public/`
3. Добавить имена `.woff2` файлов в `src/data/pages.js` → `fontsPreload`

## Переменные окружения

Скопировать `.env.example` в `.env` и заполнить:

| Переменная | Описание |
|---|---|
| `YANDEX_MAPS_API_KEY` | API-ключ Яндекс.Карт v3 |

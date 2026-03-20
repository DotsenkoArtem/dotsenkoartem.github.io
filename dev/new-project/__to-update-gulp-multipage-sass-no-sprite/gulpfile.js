const gulp = require("gulp");
const debug = require("gulp-debug");
const del = require("del");
const sharp = require("sharp");
const { optimize } = require("svgo");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");

const uglify = require("gulp-uglify");
const through2 = require("through2").obj;
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const gulpIf = require("gulp-if");
const sourcemaps = require("gulp-sourcemaps");
const notify = require("gulp-notify");
const combiner = require("stream-combiner2").obj;

// ======== TEST ========
var buffer = require("vinyl-buffer");
var csso = require("gulp-csso");
var merge = require("merge-stream");
// ======== TEST ========
// const { src } = require('gulp');

const browserSync = require("browser-sync").create();
const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV == "development";

// КОНВЕРТИРОВАНИЕ TTF --> WOFF, СОХРАНЕНИЕ В PUBLIC/
gulp.task("ttf2woff", function () {
  return gulp
    .src("src/assets/**/*.ttf", { since: gulp.lastRun("ttf2woff") })
    .pipe(ttf2woff())
    .pipe(gulp.dest("public"));
});

// КОНВЕРТИРОВАНИЕ TTF --> WOFF2, СОХРАНЕНИЕ В PUBLIC/
gulp.task("ttf2woff2", function () {
  return gulp
    .src("src/assets/**/*.ttf", { since: gulp.lastRun("ttf2woff2") })
    .pipe(
      ttf2woff2({
        clone: true,
      })
    )
    .pipe(gulp.dest("public"));
});

// ПРОСТО КОПИРОВАНИЕ ШРИФТОВ .TTF В PUBLIC/
gulp.task("ttf", function () {
  return gulp
    .src("src/assets/**/*.ttf", { since: gulp.lastRun("ttf") })
    .pipe(gulp.dest("public"));
});

// КОНВЕРТИРОВАНИЕ ШРИФТОВ, КОПИРОВАНИЕ В PUBLIC/
gulp.task("fonts", gulp.parallel("ttf", "ttf2woff", "ttf2woff2"));

// ПРОСТО КОПИРОВАНИЕ PHP
gulp.task("php", function () {
  return gulp
    .src("src/php/**/*.*", { since: gulp.lastRun("php") })
    .pipe(gulp.dest("public/php/"));
});

// ПРОСТО КОПИРОВАНИЕ libs В КОРЕНЬ
gulp.task("libs", function () {
  return gulp
    .src("src/assets/libs/**/*.*", { since: gulp.lastRun("libs") })
    .pipe(gulp.dest("public/libs/"));
});

// ======== END of TEST ========

// КОНВЕРТИРОВАНИЕ PNG --> WEBP
gulp.task("webp", function () {
  return gulp
    .src([
      "src/assets/img/**/*.png",
      "!src/assets/img/favicons/**/*.*",
    ])
    .pipe(through2(function(file, enc, cb) {
      if (!file.isBuffer()) {
        return cb(null, file);
      }
      
      const newFile = file.clone();
      newFile.extname = ".webp";
      
      sharp(file.contents)
        .webp({ quality: 95 })
        .toBuffer()
        .then(data => {
          newFile.contents = data;
          cb(null, newFile);
        })
        .catch(cb);
    }))
    .pipe(gulp.dest("public/img"));
});

// КОПИРОВАНИЕ ИЗОБРАЖЕНИЙ (только дочерние файлы - без папок) и МИНИФИКАЦИЯ
gulp.task("imgmin", function () {
  return gulp
    .src(["src/assets/img/**/*.{jpg,jpeg,png}"], {
      since: gulp.lastRun("imgmin"),
    })
    .pipe(through2(function(file, enc, cb) {
      if (!file.isBuffer()) {
        return cb(null, file);
      }
      
      let pipeline = sharp(file.contents);
      
      if (file.extname.toLowerCase() === '.png') {
        pipeline = pipeline.png({ compressionLevel: 9 });
      } else {
        pipeline = pipeline.jpeg({ quality: 80, progressive: true });
      }
      
      pipeline
        .toBuffer()
        .then(data => {
          file.contents = data;
          cb(null, file);
        })
        .catch(cb);
    }))
    .pipe(gulp.dest("public/img"));
});

// КОПИРОВАНИЕ ОСТАЛЬНЫХ ТИПОВ ИЗОБРАЖЕНИЙ БЕЗ ОБРАБОТКИ (кроме SVG - они обрабатываются отдельно)
gulp.task("imgcopy", function () {
  return gulp
    .src(["src/assets/img/**/*.{gif,ico,webp}"], {
      since: gulp.lastRun("imgcopy"),
    })
    .pipe(gulp.dest("public/img"));
});

// ОПТИМИЗАЦИЯ SVG БЕЗ ПОТЕРИ КАЧЕСТВА
gulp.task("svgmin", function () {
  return gulp
    .src(["src/assets/img/**/*.svg"], {
      since: gulp.lastRun("svgmin"),
    })
    .pipe(through2(async function(file, enc, cb) {
      if (!file.isBuffer()) {
        return cb(null, file);
      }
      
      try {
        const result = await optimize(file.contents, {
          path: file.path
        });
        file.contents = Buffer.from(result.data);
        cb(null, file);
      } catch (err) {
        cb(err);
      }
    }))
    .pipe(gulp.dest("public/img"));
});

// ИЗОБРАЖЕНИЯ: КОНВЕРТИРОВАНИЕ, МИНИИКАЦИЯ, КОПИРОВАНИЕ
gulp.task("img", gulp.series("imgmin", "svgmin", "imgcopy", "webp"));

// ОБЩАЯ ЗАДАЧА ДЛЯ СОДЕРЖИМОГО "ASSETS" (FONTS, IMG, ICONS)
gulp.task("assets", gulp.parallel("fonts", "img"));

// JS
gulp.task("js", function () {
  return combiner(
    gulp.src("src/js/**/*.js"),
    // Переименование и дублирование файла
    through2(function (file, enc, callback) {
      let fileDev = file.clone();
      fileDev.stem += ".dev";

      let fileDevMin = fileDev.clone();
      fileDevMin.stem += ".min";

      this.push(fileDev);
      this.push(fileDevMin);
      
      callback(null, file);
    }),
    gulpIf(function(file){
      return file.stem.includes(".dev");
    }, babel({
      presets: ["@babel/preset-env"],
    }),),
    
    gulpIf(function (file) {
      return file.stem.includes(".min");
    }, uglify()),
    gulp.dest("public/js")
  ).on(
    "error",
    notify.onError(function (err) {
      return {
        title: "Error: Java Script",
        message: err.message,
      };
    })
  );
});

// STYLES
gulp.task("styles", function () {
  return combiner(
    gulp.src("src/styles/sass/main.sass"),
    gulpIf(isDevelopment, sourcemaps.init()),
    sass(),
    autoprefixer({
      cascade: false,
    }),
    // Переименование файла
    through2(function (file, enc, callback) {
      file.stem = "style";
      let fileMin = file.clone();
      fileMin.stem += ".min";
      this.push(fileMin);
      callback(null, file);
    }),
    gulpIf(isDevelopment, sourcemaps.write(".")),
    gulpIf(function (file) {
      return file.stem.includes(".min");
    }, cleanCSS({ compatibility: "ie8" })),
    gulp.dest("public/css")
  ).on(
    "error",
    notify.onError(function (err) {
      return {
        title: "Error: Styles",
        message: err.message,
      };
    })
  );
});

// PUG
gulp.task("pug", function () {
  return combiner(
    gulp.src("src/pug/pages/*.*"),
    gulpIf(function (file) {
      return file.extname == ".pug";
    }, pug({ pretty: true })),
    gulp.dest("public")
  ).on(
    "error",
    notify.onError(function (err) {
      return {
        title: "Error: pug",
        message: err.message,
      };
    })
  );
});

// НАБЛЮДЕНИЕ
gulp.task("watch", function () {
  gulp.watch("src/assets/fonts/", gulp.series("fonts"));
  gulp.watch(
    ["src/assets/img/**/*.*", "!src/assets/img/icons/**/*.svg"],
    gulp.series("img")
  );
  gulp.watch("src/js/**/*.*", gulp.series("js"));
  gulp.watch("src/styles/**/*.sass", gulp.series("styles"));
  gulp.watch("src/pug/**/*.*", gulp.series("pug"));
  gulp.watch("src/php/**/*.*", gulp.series("php"));
  gulp.watch("src/assets/libs/**/*.*", gulp.series("libs"));
});

gulp.task("serve", () => {
  browserSync.init({
    server: "public",
  });
  browserSync.watch("public/**/*.*").on("change", browserSync.reload);
});

// УДАЛЕНИЕ ПАПКИ PUBLIC и TMP
gulp.task("clean", function () {
  return del(["public", "tmp"]);
});

// ПОСТРОЕНИЕ
gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.series("assets", "js", "styles", "pug", "php", "libs")
  )
);

// РАЗРАБОТКА
gulp.task("dev:lite", gulp.series("build", gulp.parallel("watch")));
gulp.task("dev", gulp.series("build", gulp.parallel("watch", "serve")));
// gulp.task("dev", gulp.series("build", gulp.parallel("watch")));

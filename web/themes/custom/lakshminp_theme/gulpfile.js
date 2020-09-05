// project paths are set in package.json
const paths = require("./package.json").paths;

const gulp = require("gulp");
const postcss = require("gulp-postcss");
const purgecss = require("gulp-purgecss");
const tailwindcss = require("tailwindcss");

// compiling tailwind CSS
gulp.task("css", () => {
  return gulp
    .src(paths.src.css + "*.css")
    .pipe(
      postcss([tailwindcss, require("autoprefixer")])
    )
    .pipe(gulp.dest(paths.dist.css));
});

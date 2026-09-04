import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import groupMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const styles = () => {
  return app.gulp
    .src(app.path.src.scss)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
      }),
    )
    .pipe(groupMediaQueries())
    .pipe(
      autoprefixer({
        grid: true,
        cascade: true,
      }),
    )
    .pipe(sourcemaps.write())
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(sourcemaps.write())
    .pipe(
      rename({
        extname: ".min.css",
      }),
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.sync.stream());
};

import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import replace from "gulp-replace";

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(replace("../files/", "./files/"))
    .pipe(replace("../index.html", "./index.html"))
    .pipe(replace("../about_page.html", "./about_page.html"))
    .pipe(replace("../services_page.html", "./services_page.html"))
    .pipe(replace("../services-entry_page.html", "./services-entry_page.html"))
    .pipe(replace("../team_page.html", "./team_page.html"))
    .pipe(replace("../team-entry_page.html", "./team-entry_page.html"))
    .pipe(replace("../publications_page.html", "./publications_page.html"))
    .pipe(
      replace(
        "../publication-entry_page.html",
        "./publication-entry_page.html",
      ),
    )
    .pipe(replace("../contact_page.html", "./contact_page.html"))
    .pipe(
      htmlmin({
        removeComments: true,
        collapseWhitespace: true,
      }),
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.sync.stream());
};

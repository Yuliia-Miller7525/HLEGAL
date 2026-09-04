import gulp from "gulp";
import sync from "browser-sync";

import { path } from "./gulp/config/path.js";

import { clear } from "./gulp/tasks/clear.js";
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { styles } from "./gulp/tasks/styles.js";
import { server } from "./gulp/tasks/server.js";

global.app = {
  gulp: gulp,
  path: path,
  sync: sync,
};

const mainTasks = gulp.parallel(copy, html, styles);

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, styles);
};

const dev = gulp.series(clear, mainTasks, gulp.parallel(watcher, server));

export default dev;

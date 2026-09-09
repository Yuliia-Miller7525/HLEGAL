export const server = () =>
  app.sync.init({
    ui: false,
    notify: false,
    startPath: "/about_page.html",
    server: {
      baseDir: app.path.buildFolder,
    },
  });

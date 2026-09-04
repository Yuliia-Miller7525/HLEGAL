export const server = () =>
  app.sync.init({
    ui: false,
    notify: false,
    server: {
      baseDir: app.path.buildFolder,
    },
  });

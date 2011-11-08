define(['express', 'module', 'path'], function (express, module, path) {
  var app = express.createServer();

  app.configure(function() {
    app.use(express.logger({ format: ':method :url :status' }));
    var filename = module.uri;
    app.use(express.static(path.dirname(filename) + '/static'));
  });

  return app;
});

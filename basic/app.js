define(['express'], function (express) {
  var app = express.createServer();

  app.configure(function() {
    app.use(express.logger({ format: ':method :url :status' }));
  });

  app.get('/', function(req, res) {
    res.send('hello requirejs server side!');
  });

  return app;
});

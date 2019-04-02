var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('views'));

app.use('/store', function (req, res, next) {
  console.log('Jestem pośrednikiem przy żądaniu do /store');
  next();
});


app.get('/logged', function(req, res){
  res.render('logged');
});

app.get('/', function (req, res) {
   res.render('index');
});


app.use(function (req, res, next) {
  res.status(404).send('nie znaleziono');

})

var server = app.listen(3000);

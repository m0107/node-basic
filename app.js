var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/test', indexRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});


const port = 80

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


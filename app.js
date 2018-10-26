let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let nodeMailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:false} ));

app.get('/', (req, res)=>{
  // res.send('Hello world');
  res.render('index');
})

app.listen(3030);
console.log('Server is running on port 3030...');



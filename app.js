let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let nodeMailer = require('nodemailer');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:false} ));

app.get('/', (req, res)=>{
  // console.log('Hello world');
  res.send('Hello world');
})

app.listen(3030);
console.log('Server is running on port 3030...');



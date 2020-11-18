// Simple NodeJS App - Push to Heroku
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log('listening on 3000');
})

app.get('/check-server', function (req, res){
  res.send('Your Backend Server is Ready')
})

app.post('/submit-payment', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})


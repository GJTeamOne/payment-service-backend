const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('listening on 3000');
})

app.get('/check-server', function (req, res){
  res.send('Hello World')
})

app.post('/submit-payment', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})


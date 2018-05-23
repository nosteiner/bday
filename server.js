var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = (process.env.PORT || 8080);


var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/home', function(request, response){
    response.sendFile(__dirname + '/public/home.html');
  });
  
  app.get('/trivia', function(request, response){
    response.sendFile(__dirname + '/public/trivia.html');
  });
  app.get('/greetings', function(request, response){
    response.sendFile(__dirname + '/public/greetings.html');
  });
  
 


app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});

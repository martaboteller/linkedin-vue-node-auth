//Libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

//Midlewares
app.use(cors());
app.use(bodyParser.json());

//Data
var messages = [
  { user: 'Jim', text: 'yes' },
  { user: 'Jim', text: 'messages' },
];
var users = [{ userName: 'Jim', password: '1' }];

//Routes
//Get all messages
app.get('/messages', (req, res) => {
  res.send(messages);
});
//Get one message
app.get('/messages/:id', (req, res) => {
  res.send(messages[req.params.id]);
});
//Post one message
app.post('/messages', (req, res) => {
  const token = req.header('Authorization');
  const userId = jwt.decode(token, '123');
  const user = users[userId];
  let msg = { user: user.userName, text: req.body.message };
  messages.push(msg);
  res.json(msg);
});
//Register user
app.post('/register', (req, res) => {
  let registerData = req.body;
  let newIndex = users.push(registerData); //returns array lenght
  let userId = newIndex - 1;

  let token = jwt.sign(userId, '123'); //Would not use hardcode hasing

  res.json(token);
});
//Login user
app.post('/login', (req, res) => {
  let loginData = req.body;

  let userId = users.findIndex((user) => user.userName == loginData.userName);
  //If user does not exist
  if (userId == -1)
    return res.status(401).send({ message: 'name or password is invalid' });
  //If userName or password does not exist
  if (users[userId].password != loginData.password)
    return res.status(401).send({ message: 'name or password is invalid' });

  let token = jwt.sign(userId, '123');

  res.json(token);
});

app.listen(port, () => console.log('app running'));

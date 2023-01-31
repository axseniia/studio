const {users} = require('./mocks');
const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/studentsList', (req, res) => {
  res.send(users);
});

app.get('/student/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === +id);
    res.send(user);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
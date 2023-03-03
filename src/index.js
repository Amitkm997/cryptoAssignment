const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const users = []; // placeholder for storing users

// create user API endpoint
app.post('/create-user', (req, res) => {
  const { email, password, name, dob } = req.body;

  // check if user already exists
  if (users.find(user => user.email === email)) {
    return res.status(400).send('User already exists');
  }

  // create new user object
  const user = {
    email,
    password,
    name,
    dob
  };

  // add user to the placeholder
  users.push(user);

  // create JWT token with user payload
  const token = jwt.sign({ email, name }, "3000");
   console.log(users)
  // send token in response
  res.send({ token });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
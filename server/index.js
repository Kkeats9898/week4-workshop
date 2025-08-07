const express = require('express');
const cors = require('cors'); // for different ports
const app = express();
var http = require('http').Server(app);

app.use(cors());
app.use(express.static(__dirname + '/www')); //allow public files to be hosted in 'www'
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.json()); // for JSON parsing

let server = http.listen(3000, function () {
    let address = server.address();
    let host = address.address === '::' ? 'localhost' : address.address;
    let port = server.address().port;
    console.log("Server listening on: " + host + " port:" + port);
})

const User = require('./models/user'); //Using User class
const users = [ //Dummy data
    new User('john', '1990-01-01', 35, 'john@example.com', '123', true),
    new User('amy', '1999-02-02', 48, 'amy@example.com', 'abc', true),
    new User('kevin', '2001-05-09', 24, 'kevin@example.com', '987', true)
]

// POST /api/auth endpoint
app.post('/api/auth', (req, res) => {
  const { email, password } = req.body; // loos for email and password matches in req body 
  const user = users.find(u => u.email === email && u.password === password && u.valid
  );

  if (user) {
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        username: user.username,
        birthdate: user.birthdate,
        age: user.age,
        email: user.email,
        valid: true
      }
    });
  } else {
    res.json({
        success: false,
        message: 'Login unsuccessful',
        user: {
            username: "",
            birthdate: "",
            age: 0,
            email: "",
            password: "",
            valid: false,
        }
    });
  }
});

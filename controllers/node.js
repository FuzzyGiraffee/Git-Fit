const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your-mysql-username',
  password: 'your-mysql-password',
  database: 'your-mysql-database-name'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body['confirm-password'];
  const sql = `INSERT INTO users (email, password, confirm_password) VALUES (?, ?, ?)`;
  const values = [email, password, confirmPassword];

  connection.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log('Form data stored in the MySQL database');
    res.send('Registration successful');
  });
});

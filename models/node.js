const express = require('express');
const app = express();

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

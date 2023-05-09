const express = require('express');
const router = express.Router();
const { login, logout } = require('../controllers/api/user.js');

const response = await fetch('/api/users/login', {
  method: 'POST',
  body: JSON.stringify({ email, password }),
  headers: { 'Content-Type': 'application/json' },
});

const Response = await fetch('/api/users/logout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
});

router.post('/login', login);

const User = require('../models/User');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    req.session.user = user;
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

router.post('/logout', logout);

const logout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
      } else {
        res.clearCookie('connect.sid');
        res.json({ message: 'Logged out' });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = router;

const router = require('express').Router();
const { User } = require('../../models');

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

router.post('/login', async (req, res) => {
    console.log("I'm at login");
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData);
        if (!userData) {
        res
            .status(400)
            //.json({ message: 'Incorrect email or password, please try again' });
            .json({ message: 'Incorrect email or password, please try again' });
        return;
        }

        const validPassword = userData.checkPassword(req.body.password);
        console.log(validPassword);
        if (!validPassword) {
        res
            .status(400)
            //.json({ message: 'Incorrect email or password, please try again' });
            .json({ message: 'Incorrect email or password, please try again' });
        return;
        }

        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      //res.status(204).end();
      res.redirect('/');
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

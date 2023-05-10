const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  console.log('Made it to post route');
  try {
      const newUser = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
      });
      console.log('I created the user in db');
      req.session.save(() => {
          req.session.user_id = newUser.id;
          req.session.logged_in = true;
          
          res.status(200).json(newUser);
          //res.redirect('/');
          return;
          
      });

  } catch (err) {
      res.status(400).json(err);
  }
});



router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('home', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('home');
});

//Weightloss route set to render with the handlebars weightloss template
router.get('/weightloss', (req, res) => {
  res.render('weightloss', { title: 'weightloss', message: 'Lets lose some weight' });
});

module.exports = router;
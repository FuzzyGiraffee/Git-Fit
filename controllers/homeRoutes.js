const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  //error leads here
  // console.log('Made it to post route');
  // console.log(req.body);
  try {
      const newUser = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
      });

      console.log('I created the user in db');
      req.session.save(() => {
        //when a new user is created it redirects you to '/'
          req.session.user_id = newUser.id;
          req.session.logged_in = true;
          req.session.newUser =  newUser;
          //commented out since it was not allowing user to be created and redirect properly without an error; can only do funcitonality on line 26 OR 27, can only do res res. once.
          res.status(200).json(newUser);
          // res.redirect('/');
          return;
          
      });

  } catch (err) {
      res.status(400).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;}
});

router.get('/', (req, res) => {
 //is the user logged in?
  try {
    if (req.session.logged_in){
      //yes? redirect to home?
      res.render('home')
    }
    //no? redirect to login screen
    else {
      res.redirect('/api/users/login');
    }  
    }catch (err) {
        res.status(500).json(err);
      }
});

//Weightloss route set to render with the handlebars weightloss template
router.get('/weightloss', (req, res) => {
  res.render('weightloss', { title: 'weightloss', message: 'Lets lose some weight' });
});
router.get('/bulking', (req, res) => {
  res.render('bulking', { title: 'bulking', message: 'Time to bulk up' });
});
router.get('/maintaining', (req, res) => {
  res.render('maintaining', { title: 'maintaining', message: 'Lets maintain' });
});


module.exports = router;
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// app.use(session({
//   secret: 'sd#44fg%6677ddA@',
//   resave: false,
//   saveUninitialized: true
// }));

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/weightloss', (req, res) => {
  res.sendFile(__dirname + '/public/weightloss.html');
});

app.get('/bulking', (req, res) => {
  res.sendFile(__dirname + '/public/bulking.html');
});

app.get('/maintaining', (req, res) => {
  res.sendFile(__dirname + '/public/maintaining.html');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const { pageRouter, botRouter, authRouter } = require('./routers');
require('./strategies/discord');

const app = express();
const PORT = process.env.PORT || 8080;

const clientDirPath = path.join(__dirname, '/../client/public');
const clientIndexHtml = path.join(clientDirPath, 'index.html');

app.get('/*.js', (req, res, next) => {
  const pathToGzipFile = `${req.url}.gz`;
  try {
    if (fs.existsSync(path.join(clientDirPath, pathToGzipFile))) {
      req.url += '.gz';
      res.set('Content-Encoding', 'gzip');
      res.set('Content-Type', 'text/javascript');
    }
  } catch (err) {
    console.error(err);
  }
  next();
});

app.use(cookieParser());
app.use(
  session({
    secret: 'FJSDFHSDGSJWOXMCWQPWCWMCNEWCWOCQFJQF',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: 'mongodb://localhost:27017/mokno',
    }),
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(clientDirPath));
app.use('/auth', authRouter);
app.use('/bot', botRouter);
app.use(pageRouter);

app.listen(PORT, console.log(`Now listening on http://localhost:${PORT}`));

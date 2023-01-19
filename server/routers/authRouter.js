const authRouter = require('express').Router();
const passport = require('passport');
const path = require('path');
const {
  botController: { getData, postData, updateQueries },
} = require('../controllers');

const clientIndexHtml = path.join(__dirname, '../../client/public/index.html');

const sendPage = (req, res) => {
  res.redirect('/');
};

authRouter.get('/discord', passport.authenticate('discord'), (req, res) => {
  res.send(200);
});

authRouter.get('/discord/redirect', passport.authenticate('discord'), sendPage);

module.exports = authRouter;

const botRouter = require('express').Router();
const {
  botController: { getGuildInfo },
} = require('../controllers');

botRouter.get('/guild/info', getGuildInfo);

module.exports = botRouter;

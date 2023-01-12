const botRouter = require('express').Router();
const {
  botController: { getData, postData, updateQueries },
} = require('../controllers');

botRouter.patch('/info/queries', updateQueries);

botRouter.get('/info', getData);

botRouter.post('/info', postData);

module.exports = botRouter;

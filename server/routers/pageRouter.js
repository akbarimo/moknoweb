const pageRouter = require('express').Router();
const path = require('path');

const clientIndexHtml = path.join(__dirname, '../../client/public/index.html');
const sendPage = (req, res) => {
  res.sendFile(clientIndexHtml);
};

pageRouter.get('/commands', sendPage);
pageRouter.get('/premium', sendPage);
pageRouter.get('/about', sendPage);

module.exports = pageRouter;

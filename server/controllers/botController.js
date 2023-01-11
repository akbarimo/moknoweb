const {
  botModel: { getGInfo },
} = require('../models');

const getGuildInfo = async (req, res) => {
  try {
    const gInfo = await getGInfo();
    res.send(gInfo);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
};

// getSearchHistory store name and query in db

module.exports = {
  getGuildInfo,
};

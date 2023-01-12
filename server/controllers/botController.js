const {
  botModel: { getDataDB, postDataDB, updateQueriesDB },
} = require('../models');

const getData = async (req, res) => {
  try {
    const data = await getDataDB();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
};

const postData = async (req, res) => {
  try {
    await postDataDB(req.body);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
};

const updateQueries = async (req, res) => {
  console.log(req.body);
  try {
    await updateQueriesDB(req.body);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
};

module.exports = {
  getData,
  postData,
  updateQueries,
};

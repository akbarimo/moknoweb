const { dataModel, findAndUpdateData } = require('../database/mongo');

const getDataDB = async () => {
  try {
    const data = await dataModel.find({});
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const postDataDB = async (data) => {
  data.stats.uptime = Date.now();
  console.log(data.stats.uptime);
  try {
    await findAndUpdateData(data);
    return Promise.resolve();
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const updateQueriesDB = async (data) => {
  try {
    await dataModel.updateOne(
      { 'meta.guildId': data.guildId },
      { $inc: { 'meta.queryCount': 1 }, $push: { queries: data.query } },
    );
    return Promise.resolve();
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

module.exports = {
  getDataDB,
  postDataDB,
  updateQueriesDB,
};

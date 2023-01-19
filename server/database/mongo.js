require('dotenv').config();
const mongoose = require('mongoose');
const dataModel = require('./models/data');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/mokno', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const findAndUpdateData = async (doc) => {
  const query = { 'meta.guildId': doc.meta.guildId };
  const docToUpdate = { $set: doc };
  const options = { new: true, upsert: true };
  try {
    const response = await dataModel.findOneAndUpdate(
      query,
      docToUpdate,
      options,
    );
    return Promise.resolve(response);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

module.exports = { dataModel, findAndUpdateData };

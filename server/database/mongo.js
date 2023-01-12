require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost/mokno', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const metaSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  queryCount: { type: Number, default: 0 },
});

const statsSchema = new mongoose.Schema({
  uptime: { type: String, required: true },
});

const querySchema = new mongoose.Schema({
  user: String,
  string: String,
});

const dataSchema = new mongoose.Schema({
  meta: metaSchema,
  stats: statsSchema,
  queries: [querySchema],
});

const dataModel = mongoose.model('mokno', dataSchema);

const findAndUpdateData = async (doc) => {
  console.log(doc);
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

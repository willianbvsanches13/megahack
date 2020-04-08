import mongoose from 'mongoose';

const { MONGO_URI } = process.env;
if (!MONGO_URI) throw Error('MONGO_URI não definido');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

export default mongoose;
export const { Schema } = mongoose;

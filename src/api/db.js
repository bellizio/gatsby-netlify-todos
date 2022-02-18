import mongoose from 'mongoose';
import 'dotenv/config';

const dbUrl = process.env.DB_URL;
const dbOptions = {
  useNewUrlParser: true,
};

export default () => mongoose.connect(dbUrl, dbOptions);

// import db from '../db';
import mongoose from 'mongoose';

const dbUrl =
  'mongodb+srv://dbellizio:Uk1SRtIb81sSDetW@cluster0-1tvyj.mongodb.net/test?retryWrites=true&w=majority';
const dbOptions = {
  useNewUrlParser: true,
};

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
exports.handler = async (event, context, callback) => {
  try {
    await mongoose.connect(dbUrl, dbOptions);

    return {
      statusCode: 200, // http status code
      body: JSON.stringify({
        msg: 'Hello, World! ' + Math.round(Math.random() * 10),
      }),
    };
  } catch (error) {
    throw Error(error);
  }
};

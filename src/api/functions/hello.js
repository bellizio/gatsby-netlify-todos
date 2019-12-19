import db from '../db';

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
exports.handler = async (event, context, callback) => {
  try {
    await db();

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

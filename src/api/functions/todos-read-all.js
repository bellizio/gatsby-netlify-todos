import db from '../db';

exports.handler = async (event, context, callback) => {
  try {
    await db();

    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: 'Todo read all',
      }),
    };
  } catch (error) {
    throw Error(error);
  }
};

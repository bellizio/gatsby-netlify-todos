import db from '../db';
import TodoModel from '../models/todo.model';
import { getId } from '../../utils';

exports.handler = async (event, context, callback) => {
  try {
    await db();
    const id = getId(event.path);
    const deletedTodo = await TodoModel.findByIdAndRemove(id);

    if (!deletedTodo) {
      const error = new Error(`Todo with ID ${id} not found.`);
      const formattedError = {
        ...error,
        statusCode: 404,
        message: error.message,
      };
      throw formattedError;
    }

    return {
      statusCode: 200,
      body: JSON.stringify(deletedTodo),
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: e.message || 'Internal server error.',
    };
  }
};

import db from '../db';
import TodoModel from '../models/todo.model';
import { getId, throwHttpNotFound } from '../../utils';

exports.handler = async (event, context, callback) => {
  try {
    await db();
    const id = getId(event.path);
    const deletedTodo = await TodoModel.findByIdAndRemove(id);

    if (!deletedTodo) {
      throwHttpNotFound(`Todo with ID ${id} not found.`);
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

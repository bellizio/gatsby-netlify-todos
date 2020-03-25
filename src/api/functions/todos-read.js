import db from '../db';
import TodoModel from '../models/todo.model';
import {
  getId,
  throwHttpNotFound,
  apiSuccessResponse,
  apiFailureResponse,
} from '../../utils';

exports.handler = async (event, context, callback) => {
  try {
    await db();
    const { path } = event;
    const id = getId(path);
    const todo = await TodoModel.findById(id);

    if (!todo) {
      throwHttpNotFound(`Todo with ID ${id} not found.`);
    }

    return apiSuccessResponse(200, todo);
  } catch (error) {
    return apiFailureResponse(error);
  }
};

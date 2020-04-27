import db from '../db';
import TodoModel from '../models/todo.model';
import {
  getId,
  throwHttpNotFound,
  apiSuccessResponse,
  apiFailureResponse,
} from '../../utils';

exports.handler = async (event) => {
  try {
    await db();
    const { path } = event;
    const id = getId(path);
    const deletedTodo = await TodoModel.findByIdAndRemove(id);

    if (!deletedTodo) {
      throwHttpNotFound(`Todo with ID ${id} not found.`);
    }

    return apiSuccessResponse(200, deletedTodo);
  } catch (error) {
    return apiFailureResponse(error);
  }
};

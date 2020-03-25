import db from '../db';
import TodoModel from '../models/todo.model';
import { getId, apiSuccessResponse, apiFailureResponse } from '../../utils';

exports.handler = async (event, context, callback) => {
  try {
    await db();
    const { path, body } = event;
    const id = getId(path);
    const data = JSON.parse(body);
    const updatedTodo = await TodoModel.findByIdAndUpdate(id, data);

    return apiSuccessResponse(200, updatedTodo);
  } catch (error) {
    return apiFailureResponse(error);
  }
};

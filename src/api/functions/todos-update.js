import db from '../db';
import TodoModel from '../models/todo.model';
import { getId, apiSuccessResponse, apiFailureResponse } from '../../utils';

exports.handler = async (event) => {
  try {
    await db();
    const { path, body } = event;
    const id = getId(path);
    const data = JSON.parse(body);
    const options = { new: true };
    const updatedTodo = await TodoModel.findByIdAndUpdate(id, data, options);

    return apiSuccessResponse(200, updatedTodo);
  } catch (error) {
    return apiFailureResponse(error);
  }
};

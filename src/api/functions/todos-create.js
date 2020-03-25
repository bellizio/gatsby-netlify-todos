import db from '../db';
import TodoModel from '../models/todo.model';
import { apiSuccessResponse, apiFailureResponse } from '../../utils';

exports.handler = async (event, context, callback) => {
  try {
    await db();
    const { body } = event;
    const data = JSON.parse(body);
    const newTodo = await TodoModel.create(data);

    return apiSuccessResponse(200, newTodo);
  } catch (error) {
    return apiFailureResponse(error);
  }
};

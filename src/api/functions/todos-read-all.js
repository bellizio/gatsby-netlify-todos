import db from '../db';
import TodoModel from '../models/todo.model';
import { apiSuccessResponse, apiFailureResponse } from '../../utils';

exports.handler = async () => {
  try {
    await db();
    const todos = await TodoModel.find();

    return apiSuccessResponse(200, todos);
  } catch (error) {
    return apiFailureResponse(error);
  }
};

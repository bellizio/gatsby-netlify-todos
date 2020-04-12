import axios from 'axios';

const FUNCTIONS_BASE_PATH = '/.netlify/functions';

export const createTodo = (data) => {
  return axios.post(`${FUNCTIONS_BASE_PATH}/todos-create`, data);
};

export const getTodo = (id) => {
  return axios.get(`${FUNCTIONS_BASE_PATH}/todos-read/${id}`);
};

export const getAllTodos = () => {
  return axios.get(`${FUNCTIONS_BASE_PATH}/todos-read-all`);
};

export const updateTodo = (data) => {
  return axios.put(`${FUNCTIONS_BASE_PATH}/todos-update/${data._id}`, data);
};

export const removeTodo = (id) => {
  return axios.delete(`${FUNCTIONS_BASE_PATH}/todos-delete/${id}`);
};

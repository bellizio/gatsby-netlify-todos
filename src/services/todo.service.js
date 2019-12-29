import axios from 'axios';

export const createTodo = data => {
  return axios.post(`/.netlify/functions/todos-create`, data);
};

export const getTodo = id => {
  return axios.get(`/.netlify/functions/todos-read/${id}`);
};

export const getAllTodos = () => {
  return axios.get(`/.netlify/functions/todos-read-all`);
};

export const updateTodo = data => {
  const id = 0; // todo: parse id from data obj
  return axios.put(`/.netlify/functions/todos-update/${id}`, data);
};

export const removeTodo = id => {
  return axios.delete(`/.netlify/functions/todos-delete/${id}`);
};

import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { getAllTodos } from '../services/todo.service';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllTodos();
        setTodos(data);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchData();
    return () => {};
  }, []);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const completeTodo = (todo) => {
    const newTodos = todos.map((t) =>
      t._id === todo._id ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
  };

  const removeTodo = (todo) => {
    const newTodos = todos.filter((t) => t._id !== todo._id);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onRemoveTodo={removeTodo}
      />
    </>
  );
};

export default Todo;

import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { getAllTodos } from '../services/todo.service';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await getAllTodos();
        setTodos(data);
      } catch (error) {
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {};
  }, []);

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const handleCompleteTodo = (todo) => {
    const newTodos = todos.map((t) =>
      t._id === todo._id ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
  };

  const handleRemoveTodo = (todo) => {
    const newTodos = todos.filter((t) => t._id !== todo._id);
    setTodos(newTodos);
  };

  const handleUpdateTodo = (todo) => {
    const newTodos = todos.map((t) =>
      t._id === todo._id ? { ...t, name: todo.name } : t
    );
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        isLoading={isLoading}
        onCompleteTodo={handleCompleteTodo}
        onRemoveTodo={handleRemoveTodo}
        onUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};

export default Todo;

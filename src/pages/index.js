import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { getAllTodos } from '../services/todo.service';

const IndexPage = () => {
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
    <Layout>
      <SEO title="Home" />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onRemoveTodo={removeTodo}
      />
    </Layout>
  );
};

export default IndexPage;

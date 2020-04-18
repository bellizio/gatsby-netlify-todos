import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <TodoForm />
      <TodoList />
    </Layout>
  );
};

export default IndexPage;

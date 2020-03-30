import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TodoList from '../components/TodoList';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <TodoList />
    </Layout>
  );
};

export default IndexPage;

import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Loading from './Loading';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todos, isLoading, onCompleteTodo, onRemoveTodo } = props;

  if (isLoading && !todos.length) {
    return <Loading />;
  }

  const listItems = todos.map((todo, i) => (
    <TodoItem
      todo={todo}
      index={i}
      onCompleteTodo={onCompleteTodo}
      onRemoveTodo={onRemoveTodo}
    />
  ));

  return <List>{listItems}</List>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      completed: PropTypes.bool,
      updated_at: PropTypes.string,
      created_at: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool,
  onCompleteTodo: PropTypes.func,
  onRemoveTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  isLoading: false,
  onCompleteTodo: () => {},
  onRemoveTodo: () => {},
};

export default TodoList;

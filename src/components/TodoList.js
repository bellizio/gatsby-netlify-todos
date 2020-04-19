import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Loading from './Loading';
import { removeTodo, updateTodo } from '../services/todo.service';

const TodoList = (props) => {
  const { todos, isLoading, onCompleteTodo, onRemoveTodo } = props;

  if (isLoading && !todos.length) {
    return <Loading />;
  }

  const handleCompleteTodo = (todo) => async () => {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed,
    };
    try {
      const { data } = await updateTodo(updatedTodo);
      onCompleteTodo(data);
    } catch (error) {
      // console.log(error);
    }
  };

  const handleRemoveTodo = (todo) => async () => {
    try {
      const { data } = await removeTodo(todo._id);
      onRemoveTodo(data);
    } catch (error) {
      // console.log(error);
    }
  };

  const listItems = todos.map((todo, i) => {
    const labelId = `checkbox-list-label-${i}`;

    return (
      <ListItem key={todo._id} dense button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            onChange={handleCompleteTodo(todo)}
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="remove"
            onClick={handleRemoveTodo(todo)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  const list = <List>{listItems}</List>;

  return <Container maxWidth="sm">{list}</Container>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})),
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

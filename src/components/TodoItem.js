import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeTodo, updateTodo } from '../services/todo.service';

const TodoItem = (props) => {
  const { todo, index, onCompleteTodo, onRemoveTodo } = props;
  const labelId = `checkbox-list-label-${index}`;

  const handleCompleteTodo = (item) => async () => {
    const updatedTodo = {
      ...item,
      completed: !item.completed,
    };

    onCompleteTodo(updatedTodo);

    try {
      await updateTodo(updatedTodo);
    } catch (error) {
      // console.log(error);
    }
  };

  const handleRemoveTodo = (item) => async () => {
    onRemoveTodo(item);

    try {
      await removeTodo(item._id);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <ListItem dense button>
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
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    completed: PropTypes.bool,
    updated_at: PropTypes.string,
    created_at: PropTypes.string,
  }),
  index: PropTypes.number,
  onCompleteTodo: PropTypes.func,
  onRemoveTodo: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {},
  index: null,
  onCompleteTodo: () => {},
  onRemoveTodo: () => {},
};

export default TodoItem;

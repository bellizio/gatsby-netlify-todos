import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeTodo, updateTodo } from '../services/todo.service';

const TodoItem = (props) => {
  const { todo, index, onCompleteTodo, onRemoveTodo, onUpdateTodo } = props;
  const labelId = `checkbox-list-label-${index}`;

  const handleTodoCheck = (item) => async () => {
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

  const handleTodoRemove = (item) => async () => {
    onRemoveTodo(item);

    try {
      await removeTodo(item._id);
    } catch (error) {
      // console.log(error);
    }
  };

  const handleTodoBlur = (item) => async () => {
    try {
      await updateTodo(item);
    } catch (error) {
      // console.log(error)
    }
  };

  const handleTodoNameChange = (item) => (event) => {
    const updatedTodo = { ...item, name: event.target.value };
    onUpdateTodo(updatedTodo);
  };

  return (
    <ListItem dense button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          onChange={handleTodoCheck(todo)}
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <TextField
        fullWidth
        id={labelId}
        value={todo.name}
        onChange={handleTodoNameChange(todo)}
        onBlur={handleTodoBlur(todo)}
        InputProps={{ disableUnderline: true }}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="remove"
          onClick={handleTodoRemove(todo)}
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
  onUpdateTodo: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {},
  index: null,
  onCompleteTodo: () => {},
  onRemoveTodo: () => {},
  onUpdateTodo: () => {},
};

export default TodoItem;

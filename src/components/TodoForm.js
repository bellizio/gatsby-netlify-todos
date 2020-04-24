import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createTodo } from '../services/todo.service';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const TodoForm = (props) => {
  const { addTodo } = props;
  const [value, setValue] = useState('');
  const [fieldError, setFieldError] = useState('');
  const classes = useStyles();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const todoName = value.trim();

    if (!todoName) {
      setFieldError('Please provide a value');
      return;
    }

    const newTodo = {
      name: todoName,
    };

    try {
      const { data } = await createTodo(newTodo);
      setValue('');
      addTodo(data);
    } catch (error) {
      // console.log(error)
    } finally {
      setFieldError('');
    }
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
    setFieldError('');
  };

  return (
    <form className="todo-form" onSubmit={handleOnSubmit}>
      <TextField
        className={classes.root}
        id="new-todo"
        label="New Todo"
        variant="outlined"
        onChange={handleOnChange}
        value={value}
        error={!!fieldError}
        helperText={fieldError}
      />
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func,
};

TodoForm.defaultProps = {
  addTodo: () => {},
};

export default TodoForm;

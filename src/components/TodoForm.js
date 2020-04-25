import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { createTodo } from '../services/todo.service';

const TodoForm = (props) => {
  const { onAddTodo } = props;
  const [value, setValue] = useState('');
  const [fieldError, setFieldError] = useState('');

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
      onAddTodo(data);
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
        fullWidth
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
  onAddTodo: PropTypes.func,
};

TodoForm.defaultProps = {
  onAddTodo: () => {},
};

export default TodoForm;

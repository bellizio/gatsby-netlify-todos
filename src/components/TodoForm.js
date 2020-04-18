import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { createTodo } from '../services/todo.service';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [, setErrorMessage] = useState('');
  const [, setSuccessMessage] = useState('');

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
      await createTodo(newTodo);
      setValue('');
      setSuccessMessage('Todo saved');
    } catch (error) {
      setErrorMessage('Failed to save todo. Please try again.');
    } finally {
      setFieldError('');
    }
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
    setFieldError('');
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="new-todo"
          label="New Todo"
          variant="outlined"
          onChange={handleOnChange}
          value={value}
          error={fieldError}
          helperText={fieldError}
        />
      </form>
    </>
  );
};

export default TodoForm;

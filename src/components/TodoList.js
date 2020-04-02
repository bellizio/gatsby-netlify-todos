import React from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import useApiService from '../hooks/useApiService';
import { getAllTodos } from '../services/todo.service';

const TodoList = () => {
  const [state] = useApiService([], getAllTodos);
  const { data, isLoading } = state;

  if (isLoading && !data.length) {
    return <p>Loading...</p>;
  }

  const listItems = data.map((todo, i) => {
    const labelId = `checkbox-list-label-${i}`;

    return (
      <ListItem key={todo._id} dense button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            // checked={checked.indexOf(todo) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.name} />
      </ListItem>
    );
  });

  const list = <List>{listItems}</List>;

  return <Container maxWidth="sm">{list}</Container>;
};

export default TodoList;

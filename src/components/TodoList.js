import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Loading from './Loading';
import useApiService from '../hooks/useApiService';
import { getAllTodos } from '../services/todo.service';

const TodoList = () => {
  const [state] = useApiService([], getAllTodos);
  const [checkedItems, setCheckedItems] = useState([]);
  const { data, isLoading } = state;

  if (isLoading && !data.length) {
    return <Loading />;
  }

  const handleListItemToggle = (item) => () => {
    const currentIndex = checkedItems.indexOf(item);
    const newChecked = [...checkedItems];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedItems(newChecked);
  };

  const listItems = data.map((todo, i) => {
    const labelId = `checkbox-list-label-${i}`;

    return (
      <ListItem key={todo._id} dense button onClick={handleListItemToggle(i)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checkedItems.indexOf(i) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.name} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="trash">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  const list = <List>{listItems}</List>;

  return <Container maxWidth="sm">{list}</Container>;
};

export default TodoList;

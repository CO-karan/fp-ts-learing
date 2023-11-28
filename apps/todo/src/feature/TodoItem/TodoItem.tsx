/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTodos } from "../TodoContext/useTodos";
import { cons } from "fp-ts/lib/ReadonlyNonEmptyArray";

type Props = {
  id: string;
  name: string;
};

const TodoItem: FC<Props> = ({ id, name }) => {
  const { markComplete, removeTodo } = useTodos();

  const handleChange = (e: React.SyntheticEvent, checked: boolean) => {
    e.stopPropagation();
    markComplete(id);
  };

  const handleRemove = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    removeTodo(id);
  };

  return (
    <ListItemButton>
      <ListItem
        secondaryAction={<Checkbox onChange={handleChange} />}
        sx={{ backgroundColor: "#C4F4C7" }}
      >
        <ListItemText>{name}</ListItemText>
      </ListItem>
      <IconButton onClick={handleRemove}>
        <DeleteIcon />
      </IconButton>
    </ListItemButton>
  );
};

export default TodoItem;

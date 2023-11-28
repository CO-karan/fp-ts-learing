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

const CompletedTodoItem: FC<Props> = ({ id, name }) => {
  return (
    <ListItem sx={{ backgroundColor: "#9BB291" }}>
      <ListItemText>{name}</ListItemText>
    </ListItem>
  );
};

export default CompletedTodoItem;

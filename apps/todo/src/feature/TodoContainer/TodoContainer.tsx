import React, { FC } from "react";
import { Box, List, Typography } from "@mui/material";
import TodoItem from "../TodoItem";

import TodoAdder from "../TodoAdder";
import { useTodos } from "../TodoContext/useTodos";
import CompletedTodoItem from "../TodoItem/CompletedTodoItem";

const TodoContainer: FC = () => {
  const { todos, completedTodos } = useTodos();
  return (
    <Box maxWidth={800} maxHeight={500}>
      <Box>
        <TodoAdder />
        <List>
          {todos.map((todo, index) => (
            <TodoItem id={todo.id} name={todo.name} key={todo.id} />
          ))}
        </List>
      </Box>
      <Box>
        <Typography>Completed Todos</Typography>
        {completedTodos.map((todo, index) => (
          <CompletedTodoItem id={todo.id} name={todo.name} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default TodoContainer;

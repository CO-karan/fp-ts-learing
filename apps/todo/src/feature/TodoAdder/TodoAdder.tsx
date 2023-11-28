import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTodos } from "../TodoContext/useTodos";

const TodoAdder = () => {
  const { addTodo } = useTodos();
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo(text);
    setText("");
  };

  return (
    <Box>
      <TextField onChange={handleChange} value={text} />
      <Button variant="contained" onClick={handleAddTodo}>
        Add+
      </Button>
    </Box>
  );
};

export default TodoAdder;

import { createContext } from "react";
import { TodoById } from "../types/commons";

type TodoContext = {
  todos: TodoById[];
  completedTodos: TodoById[];
  addTodo: (todoName: string) => void;
  removeTodo: (id: string) => void;
  markComplete: (id: string) => void;
};

export const TodoCtx = createContext({} as TodoContext);

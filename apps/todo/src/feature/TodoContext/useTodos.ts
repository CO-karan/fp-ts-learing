import { useContext } from "react";
import { TodoCtx } from "./TodoContext";

export const useTodos = () => useContext(TodoCtx);

import { FC, PropsWithChildren, useCallback, useState } from "react";
import { TodoById } from "../types/commons";
import { TodoCtx } from "./TodoContext";
import { pipe } from "fp-ts/lib/function";
import { filter, findFirst, append } from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import { makeTodo, setCompleted } from "./utils";
import { doVoid, filterbyId, findById } from "../utils/commons";

const mockTodos: TodoById[] = [
  {
    name: "Learn React",
    id: "1",
    isCompleted: false,
    createdOn: new Date().toISOString(),
  },
  {
    name: "Do pushups",
    id: "3",
    isCompleted: false,
    createdOn: new Date().toISOString(),
  },
  {
    name: "make dinner",
    id: "44",
    isCompleted: false,
    createdOn: new Date().toISOString(),
  },
  {
    name: "go to sleep",
    id: "5",
    isCompleted: false,
    createdOn: new Date().toISOString(),
  },
];

const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<TodoById[]>(mockTodos);
  const [completedTodos, setCompletedTodos] = useState<TodoById[]>([]);
  const insertTodo = useCallback(
    (todo: TodoById) => setTodos((prev) => [...prev, todo]),
    []
  );

  const insertCompletedTodo = useCallback(
    (todo: TodoById) => setCompletedTodos((prev) => [...prev, todo]),
    []
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const replaceTodo = useCallback(
    (todo: TodoById) =>
      pipe(todos, filter(filterbyId(todo.id)), append(todo), setTodos),
    []
  );

  const addTodo = (todoName: string) => {
    pipe(makeTodo(todoName), insertTodo);
  };

  const removeTodo = (id: string) => {
    pipe(todos, filter(filterbyId(id)), setTodos);
  };

  console.log("todos", todos);
  const markComplete = (id: string) => {
    pipe(
      todos,
      findFirst(findById(id)),
      O.map(setCompleted),
      O.fold(doVoid, (todo) => {
        insertCompletedTodo(todo);
        removeTodo(todo.id);
      })
    );
  };

  return (
    <TodoCtx.Provider
      value={{
        todos,
        completedTodos,
        addTodo,
        removeTodo,
        markComplete,
      }}
    >
      {children}
    </TodoCtx.Provider>
  );
};

export default TodoProvider;

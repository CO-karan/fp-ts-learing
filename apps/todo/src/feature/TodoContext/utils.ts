import { TodoById } from "../types/commons";
import { getRandomString } from "../utils/commons";

export const makeTodo = (todoName: string) => ({
  id: getRandomString(),
  name: todoName,
  isCompleted: false,
  createdOn: new Date().toISOString(),
});

export const setCompleted = (todo: TodoById): TodoById => ({
  ...todo,
  isCompleted: true,
});

export type Todo = {
  name: string;
  isCompleted: boolean;
  createdOn: string;
};

export type WithIdentity<T, A = string> = T & { id: A };
export type TodoById = WithIdentity<Todo>;

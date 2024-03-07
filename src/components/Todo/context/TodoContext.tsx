import type { TodoAction, TodoState } from "../types";
import { createContext, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";

export const TodoContext = createContext<{
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
}>({
  state: [],
  dispatch: () => null,
});

export const TodoProvider = ({
  initialTodos,
  children,
}: {
  initialTodos: TodoState;
  children: React.ReactNode;
}) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={{ state: todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

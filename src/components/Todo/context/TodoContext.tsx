import type { TodoAction, TodoState } from "../types";
import {
  type ReactNode,
  type Dispatch,
  createContext,
  useReducer,
} from "react";
import { todoReducer } from "../reducer/todoReducer";

const initialTodos: TodoState = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export const TodoContext = createContext<{
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}>({
  state: initialTodos,
  dispatch: () => null,
});

export const TodoProvider: ({
  children,
}: {
  children: ReactNode;
}) => ReactNode = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={{ state: todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

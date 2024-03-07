import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { TodoProvider } from "./context/TodoContext";
import type { TodoState } from "./types";

const initialTodos: TodoState = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export const Todo = () => {
  return (
    <TodoProvider initialTodos={initialTodos}>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

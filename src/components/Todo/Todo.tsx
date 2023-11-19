import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { TodoProvider } from "./context/TodoContext";

export const Todo = () => {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

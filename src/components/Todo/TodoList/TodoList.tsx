import { useTodo } from "../hooks";
import { TodoItem } from "../TodoItem";

export const TodoList = () => {
  const { state: todos } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

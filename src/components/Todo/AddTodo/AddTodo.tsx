import { useState } from "react";
import { useTodo } from "../hooks";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodo();

  return (
    <>
      <input
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
};

let nextId = 3;

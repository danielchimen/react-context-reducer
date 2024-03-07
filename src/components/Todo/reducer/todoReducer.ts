import type { TodoAction, TodoState } from "../types";

export const todoReducer = (
  todos: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "added": {
      return [
        ...todos,
        {
          id: action.id!,
          text: action.text!,
          done: false,
        },
      ];
    }
    case "changed": {
      return todos.map((t) => {
        if (t.id === action.todo?.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      const _exhaustiveCheck: never = action;
      throw Error("Unknown action: " + _exhaustiveCheck);
    }
  }
};

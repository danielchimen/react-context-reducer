export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodoState = Todo[];

export type TodoAction = {
  type: "added" | "changed" | "deleted";
  id?: number;
  text?: string;
  todo?: Todo;
};

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodoState = Todo[];

export type TodoChangedAction = {
  type: "changed";
  todo: Todo;
};

export type TodoDeletedAction = {
  type: "deleted";
  id: number;
};

export type TodoAddedAction = {
  type: "added";
  id: number;
  text: string;
};

export type TodoAction =
  | TodoChangedAction
  | TodoDeletedAction
  | TodoAddedAction;

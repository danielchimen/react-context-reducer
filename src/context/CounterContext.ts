import { type Dispatch, createContext } from "react";

export type InitialState = {
  count: number;
  lastUpdated: Date | null;
};

export type ActionType =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    }
  | {
      type: "reset";
      payload: number;
    };

export type ContextType = {
  state: InitialState;
  dispatch: Dispatch<ActionType>;
};

export const initialState: InitialState = {
  count: 0,
  lastUpdated: null,
};

export const CounterContext = createContext<ContextType | undefined>({
  state: initialState,
  dispatch: () => undefined,
});

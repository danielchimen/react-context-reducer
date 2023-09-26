import { type ReactNode, useReducer } from "react";
import { initialState, CounterContext } from "@context/CounterContext";
import { reducer } from "@reducers/CounterReducer";

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

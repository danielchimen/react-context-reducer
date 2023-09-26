import type { InitialState, ActionType } from "@context/CounterContext";

export const reducer: (
  state: InitialState,
  action: ActionType
) => InitialState = (state, action): InitialState => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
        lastUpdated: new Date(),
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1 < 0 ? 0 : state.count - 1,
        lastUpdated: new Date(),
      };
    case "reset":
      return {
        ...state,
        count: action.payload,
        lastUpdated: new Date(),
      };
    default:
      throw new Error();
  }
};

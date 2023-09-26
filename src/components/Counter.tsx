import { useCounter } from "@hooks/useCounter";

export const Counter = () => {
  const { state, dispatch } = useCounter();
  const { count } = state;

  return (
    <div>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <div
        style={{
          display: "flex",
          gap: ".5rem",
        }}
      >
        <button
          onClick={() =>
            dispatch({
              type: "increment",
            })
          }
        >
          increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
            })
          }
        >
          decrement
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "reset",
              payload: 0,
            })
          }
        >
          reset counter
        </button>
      </div>
    </div>
  );
};

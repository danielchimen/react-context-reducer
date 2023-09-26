import { useCounter } from "@/hooks/useCounter";

export const LastUpdated = () => {
  const {
    state: { lastUpdated },
  } = useCounter();

  if (!lastUpdated) return null;

  return (
    <div>
      <p>
        The counter was last updated at{" "}
        <time>{lastUpdated.toLocaleTimeString()}</time>
      </p>
    </div>
  );
};

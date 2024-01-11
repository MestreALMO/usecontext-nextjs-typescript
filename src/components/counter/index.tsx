import { useCount } from "../../context/Count";

export const Counter = () => {
  const { count, setCount } = useCount();

  return (
    <>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count + 1
      </button>
    </>
  );
};

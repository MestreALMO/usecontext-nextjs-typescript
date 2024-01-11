import { useCtxCount } from "../../context/ctxCount";

export const Counter = () => {
  const { count, setCount } = useCtxCount();

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

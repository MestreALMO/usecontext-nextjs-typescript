import { useCtxCount } from "../../context/ctxCount";

export const Counter = () => {
  const { ctxCount, setCtxCount } = useCtxCount();

  return (
    <>
      <h2>Counter: {ctxCount}</h2>
      <button
        onClick={() => {
          setCtxCount(ctxCount + 1);
        }}
      >
        Count + 1
      </button>
    </>
  );
};

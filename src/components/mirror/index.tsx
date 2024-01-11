import { useCtxCount } from "../../context/ctxCount";

export const Mirror = () => {
  const { count } = useCtxCount();

  return (
    <>
      <h2>Mirror: {count}</h2>
    </>
  );
};

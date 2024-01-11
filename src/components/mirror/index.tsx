import { useCtxCount } from "../../context/ctxCount";

export const Mirror = () => {
  const { ctxCount } = useCtxCount();

  return (
    <>
      <h2>Mirror: {ctxCount}</h2>
    </>
  );
};

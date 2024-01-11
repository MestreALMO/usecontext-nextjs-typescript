import { useCount } from "../../context/Count";

export const Mirror = () => {
  const { count } = useCount();

  return (
    <>
      <h2>Mirror: {count}</h2>
    </>
  );
};

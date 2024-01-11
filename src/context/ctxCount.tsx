import { ReactNode, createContext, useContext, useState } from "react";

interface ctxCountContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CtxCountContext = createContext<ctxCountContextProps>(
  {} as ctxCountContextProps
);

export default function CtxCountProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <CtxCountContext.Provider value={{ count, setCount }}>
      {children}
    </CtxCountContext.Provider>
  );
}

export const useCtxCount = () => {
  const context = useContext(CtxCountContext);
  const { count, setCount } = context;
  return { count, setCount };
};

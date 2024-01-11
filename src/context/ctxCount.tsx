import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ctxCountContextProps {
  ctxCount: number;
  setCtxCount: Dispatch<SetStateAction<number>>;
}

const CtxCountContext = createContext<ctxCountContextProps>(
  {} as ctxCountContextProps
);

export default function CtxCountProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [ctxCount, setCtxCount] = useState(0);

  return (
    <CtxCountContext.Provider value={{ ctxCount, setCtxCount }}>
      {children}
    </CtxCountContext.Provider>
  );
}

export const useCtxCount = () => {
  const context = useContext(CtxCountContext);
  const { ctxCount, setCtxCount } = context;
  return { ctxCount, setCtxCount };
};

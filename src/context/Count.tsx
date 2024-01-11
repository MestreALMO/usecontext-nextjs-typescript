import { ReactNode, createContext, useContext, useState } from "react";

interface CountContextProps {
  count: number | undefined;
  setCount: React.Dispatch<React.SetStateAction<number>> | undefined;
}

const CountContext = createContext<CountContextProps>({} as CountContextProps);

export default function CountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export const useCount = () => {
  const context = useContext(CountContext);
  const { count, setCount } = context;
  return { count, setCount };
};

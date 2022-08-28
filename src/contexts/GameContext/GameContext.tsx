import { createContext } from "react";

interface Props {
  children: React.ReactNode;
}

export const GameContext = createContext({});

const GameContextProvider: React.FC<Props> = ({ children }) => {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};

export default GameContext;

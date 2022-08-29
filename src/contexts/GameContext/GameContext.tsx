import React, { createContext } from "react";
import { GameContextType } from "../../@types";
import { rollDice } from "../../utils";

interface GameContextProviderProps {
  children: React.ReactNode;
}

export const GameContext = createContext<GameContextType | null>(null);

const GameContextProvider: React.FC<GameContextProviderProps> = ({
  children,
}) => {
  const [rollNumber, setRollNumber] = React.useState<number>(0);
  const [numberToGet, setNumberToGet] = React.useState<string | undefined>(
    undefined
  );
  const [classes, setClasses] = React.useState<string[]>(["", "", "","","","","","","",""]);

  const roll = () => {
    const arr = [...classes];
    for (let i = 0; i < 10; i++) {
      const number = rollDice(arr[i]);
      if (arr[i] == numberToGet) {
        arr[i] = numberToGet;
      } else {
        arr[i] = number;
      }
    }
    setRollNumber((v: number) => v + 1);
    setClasses(arr);
    if (numberToGet) {
      setTimeout(() => handleWin(arr), 1000);
    }
  };

  const handleWin = (arr: string[]) => {
    const win = arr.every((v: string) => v === classes[0]);
    if (win) {
      alert("Win");
    }
  };

  return (
    <GameContext.Provider
      value={{ roll, numberToGet, setNumberToGet, rollNumber, classes }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;

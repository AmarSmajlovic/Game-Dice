import React, { createContext } from "react";
import { Class, CLASSES, GameContextType } from "../../@types";
import { checkFinished, rollDice } from "../../utils";
import rollDiceSound from "../../sounds/rollDiceSound.mp3";
import { FinishGameModal } from "../../modals";

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
  const [classes, setClasses] = React.useState<Class[]>(
    Array.from(Array(CLASSES.NUMBER)).map(() => {
      return { class: "", finished: false };
    })
  );
  const [finishedGame, setFinishedGame] = React.useState<boolean>(false);

  const roll = (showModal: any) => {
    const arr = [...classes];
    for (let i = 0; i < CLASSES.NUMBER; i++) {
      const number = rollDice(arr[i].class);
      if (arr[i].class === numberToGet) {
        arr[i].class = numberToGet;
      } else {
        arr[i].class = number;
      }
    }
    checkFinished(arr, numberToGet);
    setRollNumber((v: number) => v + 1);
    setClasses(arr);
    const audio = new Audio(rollDiceSound);
    audio.play().catch((err) => console.log(err));
    if (numberToGet) {
      setTimeout(() => handleWin(arr, showModal), 100);
    }
  };

  const handleWin = (arr: Class[], showModal: any) => {
    const win = arr.every((v) => v.class === arr[0].class);
    if (win) {
      setFinishedGame((v) => (v = true));
      setTimeout(() => showModal(FinishGameModal), 1000);
    }
  };

  const resetGame = (hideModal: any) => {
    for (const clas of classes) {
      clas.class = "";
      clas.finished = false;
    }
    setNumberToGet(undefined);
    setRollNumber(0);
    setFinishedGame((v) => (v = false));
    hideModal();
  };

  return (
    <GameContext.Provider
      value={{
        roll,
        numberToGet,
        setNumberToGet,
        rollNumber,
        classes,
        resetGame,
        finishedGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;

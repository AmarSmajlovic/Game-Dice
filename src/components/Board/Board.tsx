import React, { useContext } from "react";
import { DiceList } from "..";
import { CLASSES, GameContextType } from "../../@types";
import { GameContext } from "../../contexts";
import "./styles.scss";

const Board = () => {
  const { roll, rollNumber } = useContext(GameContext) as GameContextType;

  return (
    <div className="container">
      IT TOOK YOU:{rollNumber} ATTEMPT(S)
      <DiceList dicesNumber={CLASSES.NUMBER} />
      <button onClick={roll}>ROLL</button>
    </div>
  );
};

export default Board;

import React, { useContext } from "react";
import { Button, DiceList } from "..";
import { CLASSES, GameContextType } from "../../@types";
import { diceIcon } from "../../assets";
import { GameContext } from "../../contexts";
import "./styles.scss";

const Board = () => {
  const { roll, rollNumber } = useContext(GameContext) as GameContextType;

  return (
    <div className="container">
      IT TOOK YOU:{rollNumber} ATTEMPT(S)
      <DiceList dicesNumber={CLASSES.NUMBER} />
      <Button  img={diceIcon} variant="primary" onClick={roll} />
    </div>
  );
};

export default Board;

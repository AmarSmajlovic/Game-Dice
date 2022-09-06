import React, { useContext } from "react";
import { Button, DiceList } from "..";
import { CLASSES, GameContextType } from "../../@types";
import { diceIcon } from "../../assets";
import { GameContext, ModalContext } from "../../contexts";
import "./styles.scss";

const Board = () => {
  const { showModal } = useContext(ModalContext) as any;
  const { roll } = useContext(GameContext) as GameContextType;

  return (
    <div className="container">
      <DiceList dicesNumber={CLASSES.NUMBER} />
      <Button img={diceIcon} onClick={() => roll(showModal)} />
    </div>
  );
};

export default Board;

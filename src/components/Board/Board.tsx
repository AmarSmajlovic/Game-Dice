import React, { useContext } from "react";
import { Button, DiceList, Modal } from "..";
import { CLASSES, GameContextType } from "../../@types";
import { diceIcon } from "../../assets";
import { GameContext } from "../../contexts";
import "./styles.scss";

const Board = () => {
  const [openedModal, setOpenedModal] = React.useState<boolean>(false);
  const { roll, rollNumber, resetGame } = useContext(
    GameContext
  ) as GameContextType;

  const reset = () => {
    resetGame();
    setOpenedModal(false);
  };

  return (
    <div className="container">
      <DiceList dicesNumber={CLASSES.NUMBER} />
      <Modal show={openedModal}>
        <h1>YOU FINISHED GAME WITH {rollNumber} ATTEMPT(S)</h1>
        <Button onClick={reset}>TRY AGAIN</Button>
      </Modal>
      <Button img={diceIcon} onClick={() => roll(setOpenedModal)} />
    </div>
  );
};

export default Board;

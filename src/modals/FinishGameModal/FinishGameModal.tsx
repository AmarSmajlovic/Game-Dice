import { useContext } from "react";
import { GameContextType, ModalContextType } from "../../@types";
import { GameContext, ModalContext } from "../../contexts";
import "./styles.scss";

const FinishGameModal = () => {
  const { resetGame, rollNumber } = useContext(GameContext) as GameContextType;
  const { hideModal } = useContext(ModalContext) as ModalContextType;

  return (
    <div className="container">
      <h3>YOU FINISHED GAME WITH {rollNumber} ATTEMPT(S)</h3>
      <button onClick={() => resetGame(hideModal)}>TRY AGAIN</button>
    </div>
  );
};

export default FinishGameModal;

import { useContext } from "react";
import { Button, DiceList } from "../../../components";
import { CLASSES, GameContextType } from "../../../@types";
import { diceIcon } from "../../../assets";
import { AuthContext, GameContext } from "../../../contexts";
import { ModalContext } from "../../../contexts/ModalContext";
import "./styles.scss";
import { AuthContextType } from "../../../@types/Auth";

const Board = () => {
  const { showModal } = useContext(ModalContext) as any;
  const { roll } = useContext(GameContext) as GameContextType;
  const { user } = useContext(AuthContext) as AuthContextType;

  return (
    <div className="container">
      {user && <div>{JSON.stringify(user)}</div>}
      <DiceList dicesNumber={CLASSES.NUMBER} />
      <Button img={diceIcon} onClick={() => roll(showModal)} />
    </div>
  );
};

export default Board;

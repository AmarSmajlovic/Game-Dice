import React, { useContext } from "react";
import { Cube } from "..";
import { GameContextType } from "../../@types";
import { GameContext } from "../../contexts";
import "./styles.scss";

const Board = () => {
  const { roll, numberToGet, rollNumber, classes } = useContext(
    GameContext
  ) as GameContextType;

  return (
    <div className="container">
      {rollNumber}
      {numberToGet}
      <Cube classCube={classes[0]} />
      <Cube classCube={classes[1]} />
      <Cube classCube={classes[2]} />
      <button onClick={roll}>roll</button>
    </div>
  );
};

export default Board;

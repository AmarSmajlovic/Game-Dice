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
       {
    Array.from(Array(10)).map((v,index:number) =>  <Cube classCube={classes[index]} />)
  }
      <button onClick={roll}>roll</button>
    </div>
  );
};

export default Board;

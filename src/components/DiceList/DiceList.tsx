import React, { useContext } from "react";
import { GameContextType } from "../../@types";
import { GameContext } from "../../contexts";
import { Cube } from "../Cube";
import "./styles.scss";

interface Props {
  dicesNumber: number;
}

const DiceList = ({ dicesNumber }: Props) => {
  const { classes } = useContext(GameContext) as GameContextType;

  return (
    <div className="dicesContainer">
      {Array.from(Array(dicesNumber)).map((v, index: number) => (
        <Cube
          key={index}
          finishedDice={classes[index].finished}
          classCube={classes[index].class}
        />
      ))}
    </div>
  );
};

export default DiceList;

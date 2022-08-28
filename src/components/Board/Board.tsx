import React from "react";
import { Cube } from "..";
import { rollDice } from "../../utils";
import "./styles.scss";

const Board = () => {
  const [rollNumber, setRollNumber] = React.useState<number>(0);
  const [numberToGet, setNumberToGet] = React.useState<string | undefined>(
    undefined
  );
  const [classes, setClasses] = React.useState<string[]>(["", "", ""]);

  const roll = () => {
    const arr = [...classes];
    for (let i = 0; i < 3; i++) {
      const number = rollDice(arr[i]);
      if (arr[i] == numberToGet) {
        arr[i] = numberToGet;
      } else {
        arr[i] = number;
      }
    }
    setRollNumber((v) => v + 1);
    setClasses(arr);
    if (numberToGet) {
      setTimeout(() => handleWin(arr), 1000);
    }
  };

  const handleWin = (arr: string[]) => {
    const win = arr.every((v: string) => v === classes[0]);
    if (win) {
      alert("Win");
    }
  };

  return (
    <div className="container">
      {rollNumber}
      {numberToGet}
      <Cube setNumberToGet={setNumberToGet} classCube={classes[0]} />
      <Cube setNumberToGet={setNumberToGet} classCube={classes[1]} />
      <Cube setNumberToGet={setNumberToGet} classCube={classes[2]} />
      <button onClick={roll}>roll</button>
    </div>
  );
};

export default Board;

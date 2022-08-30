import React, { memo, useContext } from "react";
import { GameContextType } from "../../@types";
import { GameContext } from "../../contexts";
import { checkFinished } from "../../utils";
import "./styles.scss";

interface CubeProps {
  classCube?: string;
  finishedDice?: boolean;
}

const Cube = ({ classCube, finishedDice }: CubeProps) => {
  const { setNumberToGet, numberToGet, classes, finishedGame } = useContext(
    GameContext
  ) as GameContextType;
  const [finished, setFinished] = React.useState<string>("");

  const getNumber = () => {
    if (!numberToGet) {
      checkFinished(classes, classCube);
      setNumberToGet(classCube);
      setFinished("finished");
    }
  };

  React.useMemo(() => {
    if (finishedDice && !finishedGame) {
      setFinished("finished");
    } else if (!finishedGame) {
      setFinished("");
    }
  }, [finishedGame, finishedDice]);

  return (
    <div onClick={getNumber} className={`cube ${classCube}`}>
      <div className={`cube__face ${finished} cube__face--1`}>
        <div className="content">
          <div className="cube__dot cube__dot__red"></div>
        </div>
      </div>
      <div className={`cube__face ${finished} cube__face--2`}>
        <div className="content">
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
        </div>
      </div>
      <div className={`cube__face ${finished} cube__face--3`}>
        <div className="content">
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
        </div>
      </div>
      <div className={`cube__face ${finished} cube__face--4`}>
        <div className="content">
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
        </div>
      </div>
      <div className={`cube__face ${finished} cube__face--5`}>
        <div className="content">
          <div className="cube__dot"></div>
          <div className="cube__dot "></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot__red cube__dot__center"></div>
        </div>
      </div>
      <div className={`cube__face ${finished} cube__face--6`}>
        <div className="content">
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(Cube);

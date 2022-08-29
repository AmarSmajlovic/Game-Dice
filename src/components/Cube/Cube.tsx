import React, { memo, useContext } from "react";
import { GameContextType } from "../../@types";
import { GameContext } from "../../contexts";
import "./styles.scss";

interface CubeProps {
  classCube?: string;
}

const Cube = ({ classCube }: CubeProps) => {
  const { setNumberToGet } = useContext(GameContext) as GameContextType;
  const getNumber = () => {
    setNumberToGet(classCube);
  };




  return (
    <div onClick={getNumber} className={`cube ${classCube}`}>
      <div className="cube__face cube__face--1">
        <div className="content">
          <div className="cube__dot"></div>
        </div>
      </div>
      <div className="cube__face cube__face--2">
        <div className="content">
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
        </div>
      </div>
      <div className="cube__face cube__face--3">
        <div className="content">
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
        </div>
      </div>
      <div className="cube__face cube__face--4">
        <div className="content">
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
        </div>
      </div>
      <div className="cube__face cube__face--5">
        <div className="content">
          <div className="cube__dot"></div>
          <div className="cube__dot "></div>
          <div className="cube__dot"></div>
          <div className="cube__dot"></div>
          <div className="cube__dot cube__dot__center"></div>
        </div>
      </div>
      <div className="cube__face cube__face--6">
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

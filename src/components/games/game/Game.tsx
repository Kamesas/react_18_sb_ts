import React, { CSSProperties, FC, useMemo } from "react";
import { useCharacterPosition } from "./useCharacterPosition";
import hero from "../../../assets/img/game/cyan-among-us-character.png";
import "./Game.scss";

interface iGameProps {
  [key: string]: any;
}

const initialStyle: CSSProperties = {
  left: 0,
  top: 0,
};

export const Game: FC<iGameProps> = () => {
  const [left, top, direction] = useCharacterPosition(50);
  const foodPos: CSSProperties = {
    left: 500,
    top: 400,
  };

  const style = useMemo(() => {
    return {
      ...initialStyle,
      left,
      top,
    };
  }, [left, top]);

  return (
    <div className="Game">
      <h2>
        [{left}, {top}]
      </h2>
      <div style={style} className={`hero ${direction}`}>
        <img src={hero} alt="alt" className="hero-img" />
      </div>

      <div className="food" style={foodPos} />
    </div>
  );
};

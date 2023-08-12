import "./loading.scss";
import React, { MouseEventHandler } from "react";

type LoadingProps = {
  setHasClickedState: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Loading({ setHasClickedState }: LoadingProps) {
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setHasClickedState(true);
  };
  return (
    <div className="loading">
      <a href="/" onClick={handleButtonClick}>
        <img className="loading-logo" src="./images/loading_logo.png" alt="" />
        <p className="click-p">[click]</p>
      </a>
    </div>
  );
}

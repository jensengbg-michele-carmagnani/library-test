'use client';
import React from "react";

type Props = {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: React.FC<Props> = ({ title, type }) => {
  const onClickHandler = () => {
    console.log("logout");
  };
  return (
    <button type={type} className="heroButton" onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default Button;

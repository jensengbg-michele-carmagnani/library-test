"use client";
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
    <button
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white hover:text-teal-50 font-bold py-2 px-4 rounded"
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};

export default Button;

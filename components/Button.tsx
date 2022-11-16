"use client";
import { unstable_getServerSession } from "next-auth";
import React from "react";

type Props = {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
  session?: Awaited<ReturnType<typeof unstable_getServerSession>>;
};

const Button: React.FC<Props> = ({ title, type, className, onClick }) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

"use client";
import React, { useState } from "react";
type booksType = {
  value: string;
  label: string;
};
type Props = {
  className?: string;
  id: string;
  optionsType: booksType[];
  onChangeHandler?: (
    e: React.ChangeEvent<HTMLSelectElement>,
    option: string
  ) => void;
};
const Select: React.FC<Props> = ({
  id,
  optionsType,
  className,
  onChangeHandler,
}) => {
  const [selectedOption, setSelectedOption] = useState("Choose an option");
  const changeOptionHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    option: string
  ) => {
    setSelectedOption(e.target.value);
    onChangeHandler && onChangeHandler(e, option);
  };
  return (
    <div>
      <select
        placeholder="Select"
        name=""
        id={id}
        value={selectedOption}
        required
        onChange={(e) => {
          changeOptionHandler(e, selectedOption);
        }}
        className={` placeholder-night-900 focus:outline-none rounded-md  w-full font-medium mb-2 cursor-pointer ${className} `}
      >
        <option selected value="">
          Choose an options
        </option>

        {optionsType?.map((option, index) => {
          return (
            <option key={index} className="text-white" value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

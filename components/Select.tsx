'use client';
import React, { useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

import OPTIONS_BOOKS from "../helpers/Options_Book";
type Props = {
  id: string;
};
const Select: React.FC<Props> = ({ id }) => {
  const [selectedOption, setSelectedOption] = useState("Choose an option");
  const changeOptionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div>
      <select
        placeholder="Select"
        name=""
        id={id}
        value={selectedOption}
        required
        onChange={(e) => changeOptionHandler(e)}
        className={` placeholder-night-900 focus:outline-none rounded-md bg-[#3d9363] py-3  px-4 w-full font-medium mb-2 cursor-pointer `}
      >
        <option selected value="">
          Choose an options
        </option>

        {OPTIONS_BOOKS?.map((option, index) => {
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

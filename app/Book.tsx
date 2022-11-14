import React from "react";
var truncate = require("lodash.truncate");

import { BookProps } from "../typing";

type Props = {
  props: BookProps;
};

const Book: React.FC<BookProps> = ({ id, coverUrl, name }) => {
  return (
    <div key={id} className=" ">
      <div className="flex flex-col h-full w-[250px] justify-center items-center border p-2 mx-auto rounded-sm bg-slate-100">
        <img
          className="object-contain h-[350px] w-[250px] "
          src={coverUrl}
          alt={name}
        />
        <h2 className="text-lg bold underline hover: py-2 bg-slate-500 w-full text-center">
          {truncate(name.toUpperCase(), { length: 20 })}
        </h2>
      </div>
    </div>
  );
};

export default Book;

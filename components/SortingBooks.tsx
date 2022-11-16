"use client";
import React, { useState } from "react";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import Select from "./Select";
import { useRouter } from "next/navigation";

type Props = { filters: React.ChangeEvent<HTMLSelectElement> };
import OPTIONS_FILTER from "../helpers/Options_Filter";
const SortingBooks = ({}: Props) => {
  const router = useRouter();

  const optionsTypeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    option: string
  ) => {
    e.preventDefault();
    router.push(`/books/filtered-books/${option}`);
  };
  return (
    <div className="w-full h-12 bg-slate-300 flex items-center  px-10">
      <AdjustmentsVerticalIcon className="h-8 w-8 text-black" />
      <Select
        id={""}
        optionsType={OPTIONS_FILTER}
        className="bg-[#7a837e]/80 py-1 px-4 ml-3"
        onChangeHandler={optionsTypeHandler}
      />
    </div>
  );
};

export default SortingBooks;

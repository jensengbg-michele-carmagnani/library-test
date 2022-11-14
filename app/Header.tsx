import React, { useState } from "react";
import "../styles/globals.css";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const isLoggedin = true;
  if (isLoggedin)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm ">
        <div className="flex space-x-2 ">
          <Image
            className="rounded-full mx-2 object-contain"
            src="https://links.papareact.com/jne"
            alt="Profile Picture"
            height={10}
            width={50}
          />
          <div>
            <p className="text-blue-400 ">Logged in as :</p>
            <p className="font-bold text-lg">Michele Carma</p>
          </div>
        </div>
        <Button type="button" title="Logout" />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center  space-x-5">
        <div className="flex items-center space-x-2 ">
          <Image
            src="https://links.papareact.com/jne"
            alt="Logo"
            height={10}
            width={50}
          />
          <p className="text-blue-400">Welcome to Meta Mesenger</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white hover:text-teal-50 font-bold py-2 px-4 rounded"
        >
          Sing in
        </Link>
      </div>
    </header>
  );
};

export default Header;

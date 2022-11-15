"use client";
import React from "react";
import "../styles/globals.css";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const isLoggedin = false;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm ">
        <div className="flex space-x-2 ">
          <Link href="/books">
            <div className="flex flex-col items-center">
              <Image
                className="rounded-full mx-2 object-contain"
                src="https://links.papareact.com/jne"
                alt="Profile Picture"
                height={10}
                width={50}
              />
              <p className="text-xl text-gray-500">
                <span className="font-thin">Good</span>reads
              </p>
            </div>
          </Link>
          {isLoggedin && (
            <div>
              <p className="text-blue-400 ">Logged in as :</p>
              <p className="font-bold text-lg">Michele Carmagnani</p>
            </div>
          )}
        </div>
        <Link href="/signin">
          <Button type="button" title={isLoggedin ? "Logout" : "Login"} />
        </Link>
      </header>
    </>
  );
};

export default Header;

"use client";
import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
import { unstable_getServerSession } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
  session: Awaited<ReturnType<typeof unstable_getServerSession>>;
};

const Header = ({ session }: Props) => {
  return (
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
      </div>
      {session && (
        <div>
          <p className="text-blue-400 ">Logged in as :</p>
          <p className="font-bold text-lg">{session.user?.name}</p>
        </div>
      )}
      {!session ? (
        <Link href="/auth/signin">
          <button className="heroButton" type="button">
            Login
          </button>
        </Link>
      ) : (
        <button
          onClick={() => signOut()}
          className="heroButton"
          type="button"
          title="Logout"
        >
          logout
        </button>
      )}
    </header>
  );
};

export default Header;

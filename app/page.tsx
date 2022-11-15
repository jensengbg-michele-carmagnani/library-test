import React from "react";
import { BookProps } from "../typing";
import getAllBooks from "../pages/api/getAllBooks";
import Book from "./Book";
import Link from "next/link";

type Props = {};

const Home = async (props: Props) => {
  const books: BookProps[] = await getAllBooks();
  return (
    <main className="max-w-7xl m-auto flex justify-center items-center h-screen text-4xl animate-pulse bg-slate-500 rounded-sm">
      <Link href={"/books"}>
        <div className="text-5xl">Get In our store</div>
      </Link>
    </main>
  );
};

export default Home;

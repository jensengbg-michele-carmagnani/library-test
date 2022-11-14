import Link from "next/link";
import React from "react";
import getAllBooks from "../../helpers/getAllBooks";
import { BookProps } from "../../typing";
import Book from "../Book";

type Props = {};

async function Books({}: Props) {
  const books: BookProps[] = await getAllBooks();
  return (
    <main className="max-w-4xl md:max-w-7xl m-auto">
      {/* <div className="w-full flex space-x-5 justify-center items-center mx-auto  overflow-x-scroll"> */}
      <div className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-4 gap-3">
        {books.map((book) => (
          <Link href={`/books/${book.id}`} key={book.id}>
            <Book
              coverUrl={book.coverUrl}
              name={book.name}
              description={""}
              averageRating={0}
              haveRead={0}
              currentlyReading={0}
              wantToRead={0}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Books;

export async function generateStaticParams() {
  const data = await fetch(`${process.env.API_URL}/books`);
  const books: BookProps[] = await data.json();
  return books.map((book) => ({ BookId: book.id?.toString() }));
}

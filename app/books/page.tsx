import Link from "next/link";
import React from "react";
import getAllBooks from "../../lib/getAllBooks";
import { BookProps } from "../../typing";
import Book from "../Book";
import HeaderBook from "./HeaderBooks";

type Props = {};

async function Books({}: Props) {
  const books: BookProps[] = await getAllBooks();

  return (
    <>
      <HeaderBook />
      <main className="max-w-2xl md:max-w-3xl m-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-4 gap-1">
          {books.map((book) => (
            <Link href={`/books/${book.id}`} key={book.id}>
              <Book
                key={book.id}
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
    </>
  );
}

export default Books;

export async function generateStaticParams() {
  const data = await fetch(`${process.env.API_URL}/books`);
  const books: BookProps[] = await data.json();
  return books.map((book) => ({ BookId: book.id?.toString() }));
}

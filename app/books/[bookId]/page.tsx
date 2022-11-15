import Image from "next/image";
import React from "react";
import Select from "../../../components/Select";
import getBook from "../../../pages/api/getBook";
import { BookProps } from "../../../typing";

type Props = {
  params: {
    bookId: string;
  };
};

async function Book({ params: { bookId } }: Props) {
  const book: BookProps = await getBook(bookId);

  const isLoggedin = true;
  return (
    <main className="flex justify-center items-start mt-28 h-screen">
      <div className="bg-[#F5E5BE] max-w-4xl h-[600] flex justify-center items-center shadow-md p-4 ">
        <div className="flex flex-col h-full space-y-3 sm:min-w-[300px]">
          <span className="text-base text-gray-500 text-center">
            {book.genre}
          </span>
          <Image
            className="object-cover rounded-md "
            src={book.coverUrl}
            alt={book.name}
            width={400}
            height={600}
          />

          <section className="mt-5 ">
            {isLoggedin && (
              <article className="pb-10">
                <Select id={bookId} />
              </article>
            )}
            <article className="flex flex-col px-4">
              <h1 className="text-xl font-semibold text-center border-b border-gray-500">
                {book?.name?.toUpperCase()}
              </h1>
              <p className="pt-5 flex justify-between items-center">
                Rating:
                <span className="text-base text-gray-500">
                  {Math.floor(book.averageRating)}
                </span>
              </p>
              <p className="pt-5 flex justify-between items-center">
                Currently reading:
                <span className="text-base text-gray-500">
                  {book.currentlyReading}
                </span>
              </p>
              <p className="pt-5 flex justify-between items-center">
                Read:
                <span className="text-base text-gray-500">{book.haveRead}</span>
              </p>
            </article>
          </section>
        </div>
        <div className="px-10 space-y-5">
          <h2 className="text-4xl text-center">Description</h2>
          <p className="">{book.description}</p>
        </div>
      </div>
    </main>
  );
}

export default Book;

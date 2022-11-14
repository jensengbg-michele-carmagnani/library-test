import Image from "next/image";
import React from "react";
import Select from "../../../components/Select";
import getBook from "../../../helpers/getBook";
import { BookProps } from "../../../typing";
import OPTIONS_BOOKS from "../../../helpers/Options_Book";

type Props = {
  params: {
    bookId: string;
  };
};

async function Book({ params: { bookId } }: Props) {
  const book: BookProps = await getBook(bookId);

  return (
    <main className="flex justify-center items-start mt-28 h-screen">
      <div className="w-[400px] h-[600] flex flex-col justify-center items-center shadow-md p-4">
        <Image
          className="object-cover rounded-md "
          src={book.coverUrl}
          alt={book.name}
          width={400}
          height={600}
        />

        <section className="mt-5">
          <article>
            <Select id={bookId} />
          </article>
          <article className="flex flex-col just">
            <h1>{book.name}</h1>
            <p>Genre: {book.genre}</p>
            <p>Rating:{book.averageRating}</p>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Book;

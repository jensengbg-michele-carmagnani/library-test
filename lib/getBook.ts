const getBook = async (id: string) => {
  const data = await fetch(`${process.env.API_URL}/books/${id}`, {
    cache: "force-cache",
  });
  const book = await data.json();
  console.log(book);
  return book;
};
export default getBook;

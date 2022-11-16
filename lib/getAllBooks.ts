const getAllBooks = async () => {
  const data = await fetch(`${process.env.API_URL}/books`, {
    cache: "no-cache",
  });
  const books = await data.json();
  return books;
};
export default getAllBooks;

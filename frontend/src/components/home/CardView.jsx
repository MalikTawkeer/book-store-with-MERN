import BookCard from "./BookCard";

function BooksCard({ books }) {
  return (
    <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
      {books.map((book) => (
        <div
          key={book._id}
          className=" flex flex-col justify-center px-10 py-5 border-2 border-neutral-600 hover:shadow-lg rounded-md"
        >
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}

export default BooksCard;

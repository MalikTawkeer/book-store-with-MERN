import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useState } from "react";
import BookModel from "./BookModel";


function BookCard({ book }) {
  const [showModal, setShowModal] = useState()
  return (
    <div>
      <div className=" flex justify-between">
        <h2 className=" text-2xl text-gray-600">{book._id}</h2>
        <h1 className=" inline-block bg-pink-300 rounded-lg px-2 py-1 font-semibold">
          {book.publishYear}
        </h1>
      </div>

      <div className=" flex gap-2 mt-5">
        <PiBookOpenTextLight className=" text-2xl mt-2 text-pink-400" />
        <h1 className=" text-2xl inline-block">{book.title}</h1>
      </div>
      <div className="flex gap-2 mt-2">
        <BiUserCircle className=" text-2xl mt-2 text-pink-400" />
        <h1 className=" text-2xl inline-block">{book.author}</h1>
      </div>
      <div className=" flex flex-wrap justify-between mt-10">
        <BiShow
        className=" text-3xl text-blue-900 hover:text-balance cursor-pointer"
        onClick={()=> setShowModal(true)}
         />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className=" text-2xl text-green-800" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className=" text-2xl text-yellow-800" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className=" text-2xl text-red-500" />
        </Link>
      </div>
      {
        showModal && <BookModel book={book} onClose={()=> setShowModal(false)} />
      }
    </div>
  );
}

export default BookCard;

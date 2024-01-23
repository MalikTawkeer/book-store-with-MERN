import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function BookModel({ book, onClose }) {
  return (
    <div className=" fixed bg-black bg-opacity-60 left-0 right-0 top-0 bottom-0 z-50 flex justify-center items-center">
      <div
        onClick={(e) => e.stopPropagation()}
        className=" sm:h-auto sm:w-auto sm:m-2 border-b-2 border-pink-300 md:w-[600px] max-w-full md:h-[350px] bg-white  rounded-lg p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className=" absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <div className=" flex flex-col items-start mt-12 px-2">
          
          <h1 className=" bg-pink-500 rounded-lg px-2 py-1 font-semibold">
            {book.publishYear}
          </h1>
          <h2 className=" text-2xl text-gray-600 mt-5">{book._id}</h2>
        </div>

        <div className=" flex gap-2 mt-5">
          <PiBookOpenTextLight className=" text-2xl mt-2 text-pink-400" />
          <h1 className=" text-2xl inline-block">{book.title}</h1>
        </div>
        <div className="flex gap-2 mt-2">
          <BiUserCircle className=" text-2xl mt-2 text-pink-400" />
          <h1 className=" text-2xl inline-block">{book.author}</h1>
        </div>
        <p className=" mt-6 font-semibold text-left w-fit px-3 py-2 border-t-2 text-xl border-pink-500 rounded-lg">Anything you want!</p>
      <p className=" text-left font-semibold border-2 border-gray-200 rounded-md shadow-md px-4 py-2 mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        distinctio vero repellat quia officiis, odit fugiat eius, unde
        voluptatibus,{" "}
      </p>
      </div>
      
    </div>
  );
}

export default BookModel;

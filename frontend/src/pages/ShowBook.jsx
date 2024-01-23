import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "../components";
import {BackButton} from "../components";

function ShowBook() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect((
  ) => {
    console.log(id);
    axios.get('http://localhost:5555/api/v1/getBook/' + id)
      .then((book)=>{
        if(book){
          setBook(book.data)
          console.log(book.data);
          setLoading(false)
        }
      })
      .catch((err)=>{
        console.log(err.message);
        setLoading(false)
      })
  }, []);

  console.log(book[0]?.title);

  return (
    <div className=" p-4">
      <BackButton />
      <h1 className=" m-4 text-3xl text-left">Book Details</h1>
      {loading ? <Spinner /> : (
        <div className=" flex flex-col border-2 text-left border-sky-400 rounded-xl w-fit p-4 shadow-lg">
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Id</span>
            <span>{book[0]?._id}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Title</span>
            <span>{book[0]?.title}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Author</span>
            <span>{book[0]?.author}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book[0]?.publishYear}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Author</span>
            <span>{book[0]?.author}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Created at</span>
            <span>{new Date(book[0]?.createdAt).toString()}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Updated at</span>
            <span>{new Date(book[0]?.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;

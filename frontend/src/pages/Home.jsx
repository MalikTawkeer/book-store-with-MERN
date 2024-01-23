import React, { useEffect, useState } from "react";
import { Spinner, BooksCard, BooksTable } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { FaThLarge } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';


function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewType, setViewType] = useState('table-view')


  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/api/v1/getBooks")
      .then((books) => {
        if (books) {
          setBooks(books.data.books);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);


  return (
    <div className=" p-4">
      <div className=" flex flex-wrap justify-between items-center">
        <h1 className=" text-3xl my-8">Books Store</h1>
        <div className=" flex flex-wrap justify-center items-center  gap-4 bg-gray-200 rounded-lg px-2 py-2 w-fit">
          <p className=" font-semibold">View By: </p>
          <button 
          className=" bg-slate-400 px-2 py-1 rounded-md hover:bg-slate-300"
          onClick={()=>setViewType('table-view')}
          >
            <FaTable className=" text-xl" />
          </button>
          <button 
          className=" bg-slate-400 px-2 py-1 rounded-md hover:bg-slate-300"
          onClick={()=>{setViewType('card-view')}}
          >
            <FaThLarge className=" text-xl" />
          </button>
        </div>
        <Link to="/books/create">
          <MdOutlineAddBox className=" hover:text-sky-600 hover:shadow-lg text-4xl text-sky-800" />
        </Link>
      </div>
      {books.length == 0 && (
        <h1 className=" text-center text-red-500 font-semibold">
          No Book Found!
        </h1>
      )}
      {loading ? <Spinner /> : viewType == 'table-view' ? <BooksTable books={books} /> : <BooksCard books={books}/> }
      
    </div>
  );
}
export default Home;

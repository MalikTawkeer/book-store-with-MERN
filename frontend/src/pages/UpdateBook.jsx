import React, { useEffect, useState } from "react";
import { BackButton, Spinner, Input } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {useSnackbar} from 'notistack'

function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const { enqueueSnackbar }= useSnackbar()

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/api/v1/getBook/" + id)
      .then((book) => {
        setLoading(false);
        setTitle(book.data[0]?.title);
        setAuthor(book.data[0]?.author);
        setPublishYear(book.data[0]?.publishYear);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  
  const handleUpdateBook = (e) =>{
    e.preventDefault()
    axios.put(`http://localhost:5555/api/v1/updateBook/${id}`, {
      title: title, author: author, publishYear: publishYear
    })
      .then((response)=>{
        if(response.status == 200){
          enqueueSnackbar('Book Edited Successfully', { variant: 'success', autoHideDuration: 1500 })
          navigate('/')
        }
      })
      .catch((err)=>{
        console.log(err.message);
        enqueueSnackbar(err.message, {variant:  "error"})
      })
  }

  return (
    <div>
      <BackButton />
      <h1 className=" text-2xl mt-2">Update Book</h1>
      {loading && <Spinner />}
      <div className=" p-4 mt-2 border-2 border-sky-800  mx-auto w-1/2 rounded-sm">
        {error && <p className=" text-red-500 font-semibold">{error}</p>}
        <form onSubmit={handleUpdateBook} className=" w-full">
          <Input
            label="Title: "
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <Input
            label="Author: "
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.currentTarget.value)}
          />
          <Input
            label="Publish Year: "
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.currentTarget.value)}
          />
          <button
            type="submit"
            className=" bg-green-800 text-white px-3 py-1 rounded-lg hover:bg-green-700"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateBook;

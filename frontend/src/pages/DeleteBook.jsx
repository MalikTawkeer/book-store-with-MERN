import React from 'react'
import { BackButton, Spinner } from '../components'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useSnackbar} from 'notistack'


function DeleteBook() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const handleDeleteBook = () => {
    axios.delete(`http://localhost:5555/api/v1/deleteBook/${id}`)
      .then(()=>{
        enqueueSnackbar('Book Deleted', {variant:'success',  autoHideDuration: 1500})
        navigate('/')
      })
      .catch((err)=>{
        console.log(err);
        enqueueSnackbar(err.message, {variant: 'error', autoHideDuration: 1500})
      })
  }

  return (
    <div className=' p-4'>
      <BackButton />
      <h1 className=' text-2xl text-left mt-3'>Delete Book</h1>
      <div className=' w-full px-5 py-4'>
        <div className=' border-2 border-red-600 w-1/2 mx-auto rounded-sm px-5 py-3'>
          <h2 className=' mb-5 font-semibold text-2xl'>Are You sure to delete a Book?</h2>
          <button
          className=' bg-red-500 rounded-lg px-3 py-2 mb-3 w-1/3 hover:bg-red-400 text-white font-semibold shadow-md'
          onClick={handleDeleteBook}
          >
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteBook;
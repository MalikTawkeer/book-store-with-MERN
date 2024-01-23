import React, { useState } from 'react'
import { BackButton, Spinner, Input } from '../components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'


function CreateBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear]  = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const handleSaveBook = (e) =>{
    setLoading(true)
    e.preventDefault()
    axios.post('http://localhost:5555/api/v1/addBook', {title: title, author: author, publishYear: publishYear})
      .then((newBook)=>{
        setLoading(false)
        enqueueSnackbar('Book Saved Successfully', {variant: 'success',  autoHideDuration: 1500})
        navigate('/')
      })
      .catch((error)=>{
        console.log(error.message);
        setLoading(false)
        enqueueSnackbar(error.message, {variant:'error', autoHideDuration: 1500})
      })
  }

  return (
    <div className=' p-4'>
      <BackButton />      
      <h1 className=' text-center text-2xl'>CreateBook</h1>
      {loading ? <Spinner /> : ''}
      <div className=' p-4 mt-2 border-2 border-sky-800  mx-auto w-1/2 rounded-sm'>
        <form onSubmit={handleSaveBook} className=' w-full'>
          <Input
          label='Title: '
          type='text'
          value={title}
          onChange={(e)=> setTitle(e.currentTarget.value)}
          />
          <Input
          label='Author: '
          type='text'
          value={author}
          onChange={(e)=> setAuthor(e.currentTarget.value)}
          />
          <Input
          label='Publish Year: '
          type='number'
          value={publishYear}
          onChange={(e)=> setPublishYear(e.currentTarget.value)}
          />
          <button
          type='submit'
          className=' bg-sky-800 text-white px-3 py-1 rounded-lg hover:bg-sky-700'
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateBook
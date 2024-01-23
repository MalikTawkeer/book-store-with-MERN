
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, CreateBook, UpdateBook, DeleteBook, ShowBook } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route
        path='/'
        element={<Home />}
         />
         <Route
        path='/books/create'
        element={<CreateBook />}
         />

         <Route
        path='/books/details/:id'
        element={<ShowBook />}
         />
         <Route
        path='/books/edit/:id'
        element={<UpdateBook />}
         />
         <Route
        path='/books/delete/:id'
        element={<DeleteBook />}
         />
      </Routes>
    </>
  )
}

export default App

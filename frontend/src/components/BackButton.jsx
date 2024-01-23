import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function BackButton({desination = '/'}) {
  return (
    <div className='flex'>
        <Link
        to={desination}
        className=' bg-sky-800 text-white rounded-lg px-8 py-1 w-fit hover:bg-sky-700 hover:shadow-sm'
        >
            <BsArrowLeft className=" text-2xl cursor-pointer" />
        </Link>
    </div>
  )
}

export default BackButton
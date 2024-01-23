import React from 'react'

function Spinner() {
  return (
    <div className=' w-full flex justify-center items-center'>
      <div className=' animate-ping w-16 h-16 m-8 rounded-full text-center text-4xl text-blue-500'>......</div>
    </div>
  )
}

export default Spinner
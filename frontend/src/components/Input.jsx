import React, { useId } from 'react'

const Input = React.forwardRef( function Input({className = '',
  bgColor='',
  label,
  type,
  ...props

}, ref) {
    const id = useId()
    return (
      <div className='flex flex-col mb-4'>
        {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
        <input 
        required
        type={type}
        id={id}
        className={`${className} bg-gray-300 px-2 py-1 outline-none focus:shadow-sm focus:shadow-sky-800 rounded-lg`}
        ref={ref}
        {...props}
         />
      </div>
    )
  } )

export default Input
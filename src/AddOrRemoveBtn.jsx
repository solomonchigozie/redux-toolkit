import React from 'react'

const AddOrRemoveBtn = ({visible, onAddClick, onRemoveClick}) => {
    if(!visible) return null
  return (
    <>
        <button onClick={onAddClick} className='my-5 w-8 h-8 bg-red-400 text-white mx-7'>+</button>
        <button onClick={onRemoveClick} className='my-5 w-8 h-8 bg-red-400 text-white'>-</button>
    </>
  )
}

export default AddOrRemoveBtn

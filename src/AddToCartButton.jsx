import React from 'react'

const AddToCartBtn = ({isDisabled, onClick}) => {

    const className = !isDisabled 
        ? 'my-5 p-2 bg-blue-400 text-white'
        :'my-5 p-2 bg-blue-100 text-white'
  return (
    <button onClick={onClick} disabled={isDisabled} className={className}>
        Add to cart
    </button>
  )
}

export default AddToCartBtn

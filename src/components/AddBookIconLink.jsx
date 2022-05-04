import React from 'react'
import {AiFillPlusCircle as PlusIcon} from 'react-icons/ai'

function AddBookIconLink() {

  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <PlusIcon size="50" className="add-book-icon" onClick={handleClick}></PlusIcon>
  )
}

export default AddBookIconLink
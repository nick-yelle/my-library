import React from 'react'

function Book({ book }) {
  return (
    <div>
      {console.log(book.id + " " + book.title)}
    </div>
  )
}

export default Book
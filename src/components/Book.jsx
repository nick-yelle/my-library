import React from 'react'
import Card from './shared/Card'

function Book({ book }) {
  return (
    <Card>
      <div className='book-title'>{book.title}</div> 
      <div className="book-publish-year">{(book.publishYear !== "NA") ? book.publishYear : ""}</div>
      <div className='book-author'>{book.author}</div>
    </Card>
  )
}

export default Book
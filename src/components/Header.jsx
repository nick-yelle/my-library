import React from 'react'
import MyBooksIconLink from './MyBooksIconLink'

function Header() {
  return (
    <div className='header'>
      <span className='left name'>Nick Yelle</span>
      <span className='right book-icon'>
        <MyBooksIconLink />
      </span>
      
    </div>
  )
}

export default Header
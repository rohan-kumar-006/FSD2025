import React from 'react'

const Book = (data) => {
  return (
    <>

    <div className="book">
        <p className="book-title"><b>Title</b> : {data.title}</p>
        <p className="book-author"><b>Author</b> : {data.author}</p>
        <img className="book-cover" src={data.img_url} alt="" />
        <span className='add-to-cart'>Add to Cart</span>
    </div>
    </>
  )
}

export default Book
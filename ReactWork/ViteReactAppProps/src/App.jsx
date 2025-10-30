import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import ICard from './components/ICard'
import Book from './components/Book'
import StateHandling from './components/StateHandling'
import ImageManipulation from './components/ImageManipulation'

function App() {

//   const student=[
//     {
//     name:"Ram",
//     age:20,
//     branch:"CSE",
//     college:"ABES",
//     location:"Ghaziabad"
//   },
//     {
//     name:"Rajveer",
//     age:20,
//     branch:"CSE",
//     college:"ABES",
//     location:"Ghaziabad"
//   },
//     {
//     name:"Pratik",
//     age:20,
//     branch:"CSE",
//     college:"ABES",
//     location:"Ghaziabad"
//   },
// ]
const book_data=[
  {
    title:"C Programming",
    author:"Swati Saxena",
    img_url:"https://bpbonline.com/cdn/shop/products/1355_Front.jpg?v=1755669921"
  },
  {
    title:"Python",
    author:"Aditya",
    img_url:"https://in.bpbonline.com/cdn/shop/files/1395_Epub.jpg?v=1755671447&width=600"
  },
  {
    title:"Azure Networking",
    author:"Jose",
    img_url:"https://in.bpbonline.com/cdn/shop/files/2362_Epub.jpg?v=1755671328&width=600"
  },
]

  const image_path="public\\pikachu.png"
  return (
    <>
    {/* <div className="idcard-container">

    {student.map((st)=>{
      return <ICard props={st}/>
    })}
    </div> */}

    {/* <div className="book-container">
      {book_data.map((data)=>{
       return <Book {...data}/>
      })}
    </div> */}
    {/* <StateHandling/> */}
    <ImageManipulation path={image_path}/>

    </>
  )
}

export default App

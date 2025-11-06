import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

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
  const logo_path="https://png.pngtree.com/png-vector/20250910/ourmid/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.webp"
  return (
    <>
    <Navbar logo_path={logo_path}/>
    <Hero/> 
    </>
  )
}

export default App

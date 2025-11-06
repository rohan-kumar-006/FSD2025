import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import MainLayout from './components/MainLayout'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/> 
        <Route path='/dashboard' element={<Dashboard/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App

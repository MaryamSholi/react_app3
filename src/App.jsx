import React from 'react'
import Products from './components/products/Products.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import Restaurant from './components/restaurant/Restaurant.jsx'
import { Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/restaurant' element={<Restaurant />} />
        

      </Routes>
    </>

  )
}

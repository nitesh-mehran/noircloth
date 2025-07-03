import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import Products from '../components/pages/Products'
import Cart from '../components/pages/Cart'
import Checkout from '../components/pages/Checkout'
import Success from '../components/pages/Success'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={< Cart/>}/>
        <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
    
    </>
  )
}

export default AppRoutes
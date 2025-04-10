import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import {Routes,Route} from 'react-router-dom'
import Products from './components/Products.jsx'
import Product from './components/Product.jsx'
import AboutUs from './components/AboutUs.jsx'
import Contacts from './components/Contacts.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Cart from './components/Cart.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/products' Component={Products}></Route>
        <Route exact path='/products/:id' Component={Product}></Route>
        <Route exact path='/about' Component={AboutUs}></Route>
        <Route exact path='/contacts' Component={Contacts}></Route>
        <Route exact path='/login' Component={Login}></Route>
        <Route exact path='/register' Component={Register}></Route>
        <Route exact path='/cart' Component={Cart}></Route>
      </Routes>
    </>
  )
}

export default App

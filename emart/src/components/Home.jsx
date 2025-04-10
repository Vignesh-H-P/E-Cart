import React from 'react'
import Products from './Products'
export default function Home() {
  return (
    <div className='hero'>
        <div className="card text-bg-dark border-0">
    <img src="/web.jpg" className="card-img" alt="background"  height="600px"/>
    <div className="card-img-overlay d-flex flex-column ">
        <div className="container ">
     <em><h5 className="card-title display-3  fw-bolder text-dark">New Arrivals</h5>
      <p className="card-text  fs-10 fw-bolder text-dark">CHECK OUT ALL TRENDS</p></em> 
        </div>
    </div>
  </div>
  <Products/></div>
  )
}

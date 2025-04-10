import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <center>
        <div className="card  mt-5" style={{ maxWidth: '950px',textAlign:'left' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/about.jpg" className="img-fluid rounded-start  me-3 mt-4" alt="contact" style={{ height: '250px', width:'350px' }}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">

                eMart is dedicated to providing a seamless and enjoyable online shopping experience by offering high-quality, stylish products at the best prices. Our diverse collection includes men's fashion, ranging from casual wear to formal attire, including jackets, suits, t-shirts, jeans, and sneakers. For women, we offer a wide selection of clothing, shoes, accessories, and handbags designed for every occasion. We also stay ahead of the curve with the latest electronics, including smartphones, laptops, smart home devices, headphones, and gaming accessories. To complete your look, our exquisite jewelry collection features elegant rings, necklaces, earrings, and bracelets, perfect for any occasion or as a thoughtful gift.
                </p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div></center>
    </div>
  );
}
 

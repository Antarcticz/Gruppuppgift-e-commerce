import './Section1.scss'
import React from 'react'


const Section1 = () => {
  return (
    <div className="home-section-1">
      <div>
        <h1>WELCOME TO BMARKETO SHOP</h1>
        <h2>Exclusive Chair</h2>
        <h2>gold Collection.</h2>
        <button className='btn btn-shopnow'>SHOP NOW</button>
      </div>
      <div>
        <img src="/Placeholders/625x647.svg" alt="" />
        {/* <img src={product.imageURL} alt={product.name} /> */}
      </div>
    </div>
  )
}


export default Section1
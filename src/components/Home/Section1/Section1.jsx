import './Section1.scss'
import React from 'react'


const Section1 = () => {
  return (
    <div className="home-section-1">
      <div className="home-container-inner">
        <div className='home-container-left'>
          <h1>WELCOME TO BMARKETO SHOP</h1>
          <h2>Exclusive Suit</h2>
          <h2>Supreme Collection.</h2>
          <button className='general-btn btn-shopnow'>SHOP NOW</button>
        </div>
        <div className='home-container-right'>
          <img src="https://nerdable.com/wp-content/uploads/2021/11/most-expensive-suits-in-the-world-336x224.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}


export default Section1
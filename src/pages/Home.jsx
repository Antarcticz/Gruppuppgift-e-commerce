import React from 'react'

const Home = () => {
  return (
    <div className="section-1">
      <div className="container">
        <div>
          <h1>WELCOME TO BMARKETO SHOP</h1>
          <h2>Exclusive Chair</h2>
          <h2>gold Collection.</h2>
          <button className='btn btn-shopnow'>SHOP NOW</button>
        </div>
        <div>
        <img src="/Placeholders/625x647.svg" alt="" />
        </div>
      </div>

      <div className="section-2">
        <div className="container">
          <h2>Best Collection</h2>
          <ul className="shop-links">
            <li>All&nbsp;&nbsp;/&nbsp;&nbsp;</li>
            <li> Bags&nbsp;&nbsp;/&nbsp;&nbsp;</li>
            <li> Dress&nbsp;&nbsp;/&nbsp;&nbsp;</li>
            <li> Decoration&nbsp;&nbsp;/&nbsp;&nbsp;</li>
            <li> Essentials&nbsp;&nbsp;/&nbsp;&nbsp;</li>
            <li> Interior&nbsp;&nbsp;/&nbsp;&nbsp;</li>
            <li> Laptop&nbsp;&nbsp;/&nbsp;&nbsp;</li>
            <li> Mobile&nbsp;&nbsp;/&nbsp;&nbsp;</li>
            <li> Beauty</li>
          </ul>
          <div className="product-container">
            <img src="/Placeholders/270x295.svg" alt="" />
            <img src="/Placeholders/270x295.svg" alt="" />
            <img src="/Placeholders/270x295.svg" alt="" />
            <img src="/Placeholders/270x295.svg" alt="" />
          </div>
          <div className="product-container">
            <img src="/Placeholders/270x295.svg" alt="" />
            <img src="/Placeholders/270x295.svg" alt="" />
            <img src="/Placeholders/270x295.svg" alt="" />
            <img src="/Placeholders/270x295.svg" alt="" />
          </div>
          <button className='btn-load'>LOAD MORE <img className='icon-sm' src="/Placeholders/rotate-cw.svg" alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Home
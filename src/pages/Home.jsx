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
            <li>All</li>
            <p>&#47;</p>
            <li> Bags</li>
            <p>&#47;</p>
            <li> Dress</li>
            <p>&#47;</p>
            <li> Decoration</li>
            <p><p>&#47;</p></p>
            <li> Essentials</li>
            <p><p>&#47;</p></p>
            <li> Interior</li>
            <p><p>&#47;</p></p>
            <li> Laptop</li>
            <p><p>&#47;</p></p>
            <li> Mobile</li>
            <p><p>&#47;</p></p>
            <li> Beauty</li>
          </ul>
          <div className="product-container">
            <div className="card">
              <img src="/Placeholders/270x295.svg" alt="" />
              <p>Apple watch series</p>
              <span>$30.00</span>
            </div>
            <div className="card">
              <img src="/Placeholders/270x295.svg" alt="" />
              <p>Table Lamp</p>
              <span>$30.00</span>
            </div>
            <div className="card">
              <img src="/Placeholders/270x295.svg" alt="" />
              <p>laptop thinkpad lenovo</p>
              <span>$30.00</span>
            </div>
            <div className="card">
              <img src="/Placeholders/270x295.svg" alt="" />
              <p>Table Lamp</p>
              <span>$30.00</span>
            </div>
          </div>
          <div className="product-container">
            <div className="card">
              <img src="/Placeholders/270x295.svg" alt="" />
              <p>Gumshoes black fashion</p>
              <span className='old-price'>$120.00</span><span>$80.00</span>
            </div>
            <div className="card">
              <img src="/Placeholders/270x295.svg" alt="" />
              <p>Woman wite dress</p>
              <span>$30.00</span>
            </div>
            <div className="card">
              <img src="/Placeholders/270x295.svg" alt="" />
              <p>Kettle water boiler</p>
              <span>$30.00</span>
            </div>
            <div className="card">
              <img src="/Placeholders/270x295.svg" alt="" />
              <p>Congee cooking rice cooker</p>
              <span>$30.00</span>
            </div>
          </div>
          <button className='btn-load'>LOAD MORE <img className='icon-sm' src="/Placeholders/rotate-cw.svg" alt="" /></button>
        </div>
      </div>

      <div className="section-3">
        <div className="container">
          <div className="product-container">
            <div className="card">
              <img src="/Placeholders/369x310.svg" alt="" />
              <p>Table Lamp - scelerisque tempore</p>
              <span className='old-price'>$50.00</span><span>$30.00</span>
            </div>
            <div className="onSale-card">
              <h1>UP TO SELL</h1>
              <h2>50% OFF</h2>
              <h3>Get The Best Price</h3>
              <p>Get the best daily offer et accusam et</p>
              <p>justo duo dolores et ea rebum. Stet</p>
              <p>clita kasd gubergren no sea taki</p>
              <span>Discover More</span>
            </div>
            <div className="card">
              <img src="/Placeholders/369x310.svg" alt="" />
              <p>Table Lamp - scelerisque tempore</p>
              <span className='old-price'>$50.00</span><span>$30.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-4">
        <div className="container">
          <div className="product-container">
            <div className="card">

            </div>
          </div>
        </div>
      </div>

      <div className="section-5"></div>
    </div>
  )
}

export default Home
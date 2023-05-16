import React from 'react'
import '../scssPages/productDetails.scss'

const ProductDetails = () => {
  return (
    <div className="container-productDetails">
      <div className='banner'>
        <img src="/Placeholders/1920x300.svg" alt="" />
      </div>
      {/* ____________________________________SECTION 1____________________________________ */}
      <div className='section-1'>
        <div className='container-left'>
          <div className='img-big'>
            <img src="/Placeholders/501x430.svg" alt="" />
          </div>
          <div className='img-sm'>
            <img src="/Placeholders/120x113.svg" alt="" />
            <img src="/Placeholders/120x113.svg" alt="" />
            <img src="/Placeholders/120x113.svg" alt="" />
            <img src="/Placeholders/120x113.svg" alt="" />
          </div>
        </div>
        <div className="container-right">
          <div className="product-info">
            <h2>Young Star Smart Shoe in Fashion</h2>
            <p>Lirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
            <p>voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
            <p>kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="reviews">
            <div className='stars'>
              <p>&#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;</p>
            </div>
            <div className='review-nr'>
              <p>16 Reviews</p>
            </div>
          </div>
          <div className="price">
            <p>$30</p>
          </div>
          <div className="addToCart">
            <button className='btn-minus'>-</button>
            <div className='count'><p>2</p></div>
            <button className='btn-plus'>+</button>
            <button className='btn btn-cart'>Add to Cart</button>
          </div>
          <div className="product-color">
            <div className="btn red"></div>
            <div className="btn yellow"></div>
            <div className="btn lightblue"></div>
            <p>SKU:N/A</p>
          </div>
          <div className="wishlist">
            <button className='btn btn-wishlist'>Add to wishlist</button>
          </div>
          <div className="category">
            <p>Category: Table Lamp, Light</p>
          </div>
        </div>
      </div>
      {/* ____________________________________SECTION 2____________________________________ */}
      <div className="section-2">
        <ul className='section-2-navbar'>
          <li className='red'>DESCRIPTION</li>
          <li>ADDITIONAL INFO</li>
          <li>REVIEWS &#40;0&#41;</li>
          <li>SHIPPING & DELIVERY</li>
        </ul>
        <div className='container-description'>
          <div className='description-text'>
            <h2 className='spacing'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.</h2>
            <p className='spacing'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            <p>invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et cusam et</p>
            <p>justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata santus est Lorem</p>
            <p>ipsum dolor sit amet. Lorem ipsum dolor.</p>

            <p className='spacing'>accusantium laborum pretium hic excepturi harum repellat facilisis convallis potenti,</p>
            <p>adipiscing lectus aliqua. Asperiores repudiandae ipsam error erat, accusamus, cum taciti</p>
            <p>unde?</p>

            <p className='spacing'>Praesentium, pariatur, tempora consequuntur purus sapiente, iaculis vitae consequatur,</p>
            <p>rhoncus earum eleifend, hendrerit ipsum rhoncus ex error, impedit! Alias laboris sequi curae</p>
            <p>aptent? Eu sagittis eu, distinctio tortor? Dapibus delectus! Consequuntur luctus.</p>

            <p className='spacing'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            <p>invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et cusam et</p>
            <p>justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata santus est Lorem</p>
            <p>ipsum dolor sit amet. Lorem ipsum dolor.</p>

            <img className='description-img' src="/Placeholders/469x356.svg" alt="" />
          </div>
        </div>
      </div>
      {/* ____________________________________SECTION 3____________________________________ */}
      <div className="section-3">
        <h2>Related Products</h2>
        <div className="product-container">
          <div className="card">
            <img src="/Placeholders/270x295.svg" alt="" />
            <p>Gumshoes black fashion</p>
            <span className='old-price'>$120.00</span><span>$80.00</span>
          </div>
          <div className="card">
            <img src="/Placeholders/270x295.svg" alt="" />
            <p>Woman white dress</p>
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
      </div>
      <div className='section-4'>
        <div className='product-container-sm'>
          <div className='card'>
            <img src="/Placeholders/200x122.svg" alt="" />
            <img src="/Placeholders/200x122.svg" alt="" />
            <img src="/Placeholders/200x122.svg" alt="" />
            <img src="/Placeholders/200x122.svg" alt="" />
            <img src="/Placeholders/200x122.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
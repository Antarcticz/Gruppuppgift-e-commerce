import '../scssPages/home.scss'
// import React from 'react'
// import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/features/products/productListSlice'
import Loader from '../components/Loader/Loader'
import ProductCard from '../components/ProductCard/ProductCard'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error } = useSelector(state => state.productList)

  return (
    <div>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      <div className="container-home">
        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}

export default Home

// const Home = ({product}) => {

//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getProducts())
//   }, [])

//   const { products, loading, error } = useSelector(state => state.productList)

//   return (
//     <div>
//       { loading && <Loader />}
//       { error && <p>{error}</p>}
//       <div className="container-home">
//         {
//           products.map(product => <Home key={product.id} product={product} />)
//         }
//         {/* ____________________________________SECTION 1____________________________________ */}
//         <div className="section-1">
//           <div>
//             <h1>WELCOME TO BMARKETO SHOP</h1>
//             <h2>Exclusive Chair</h2>
//             <h2>gold Collection.</h2>
//             <button className='btn btn-shopnow'>SHOP NOW</button>
//           </div>
//           <div>
//           <img src={product.imageURL} alt={product.name} />
//           </div>
//         </div>
//         {/* ____________________________________SECTION 2____________________________________ */}
//         <div className="section-2">
//           <h2>Best Collection</h2>
//           <ul className="shop-links">
//             <li>All</li>
//             <p>&#47;</p>
//             <li> Bags</li>
//             <p>&#47;</p>
//             <li> Dress</li>
//             <p>&#47;</p>
//             <li> Decoration</li>
//             <p><p>&#47;</p></p>
//             <li> Essentials</li>
//             <p><p>&#47;</p></p>
//             <li> Interior</li>
//             <p><p>&#47;</p></p>
//             <li> Laptop</li>
//             <p><p>&#47;</p></p>
//             <li> Mobile</li>
//             <p><p>&#47;</p></p>
//             <li> Beauty</li>
//           </ul>
//           <div className="product-container">
//             <div className="card">
//               <Link to={`/product-details/${product.id}`}>
//                 <img src={product.imageURL} alt={product.name} />
//                 <p>{product.name}</p>
//                 <span>{product.description.slice(0, 50)}...</span>
//               </Link>
//             </div>
//           </div>
//           <div className="product-container">
//           <div className="card">
//               <Link to={`/product-details/${product.id}`}>
//                 <img src={product.imageURL} alt={product.name} />
//                 <p>{product.name}</p>
//                 <span>{product.description.slice(0, 50)}...</span>
//               </Link>
//             </div>
//           <button className='btn btn-load'>LOAD MORE <img className='icon-sm' src="/Placeholders/rotate-cw.svg" alt="" /></button>
//         </div>
//         {/* ____________________________________SECTION 3____________________________________ */}
//         <div className="section-3">
//           <div className="product-container">
//             <div className="card">
//               <img src="/Placeholders/369x310.svg" alt="" />
//               <p>Table Lamp - scelerisque tempore</p>
//               <span className='old-price'>$50.00</span><span>$30.00</span>
//             </div>
//             <div className="onSale-card">
//               <h1>UP TO SELL</h1>
//               <h2>50% OFF</h2>
//               <h3>Get The Best Price</h3>
//               <p>Get the best daily offer et accusam et</p>
//               <p>justo duo dolores et ea rebum. Stet</p>
//               <p>clita kasd gubergren no sea taki</p>
//               <span>Discover More</span>
//             </div>
//             <div className="card">
//               <img src="/Placeholders/369x310.svg" alt="" />
//               <p>Table Lamp - scelerisque tempore</p>
//               <span className='old-price'>$50.00</span><span>$30.00</span>
//             </div>
//           </div>
//         </div>
//         {/* ____________________________________SECTION 4____________________________________ */}
//         <div className="section-4">
//           <h2>Top selling products in this week</h2>
//           <div className="product-container">
//             <div className="card">
//               <img src="/Placeholders/270x295.svg" alt="" />
//               <p>Apple watch series</p>
//               <span className='old-price'>$120.00</span><span>$80.00</span>
//             </div>
//             <div className="card">
//               <img src="/Placeholders/270x295.svg" alt="" />
//               <p>Gumshoes black fashion</p>
//               <span className='old-price'>$120.00</span><span>$80.00</span>
//             </div>
//             <div className="card">
//               <img src="/Placeholders/270x295.svg" alt="" />
//               <p>Woman white dress</p>
//               <span>$30.00</span>
//             </div>
//             <div className="card">
//               <img src="/Placeholders/270x295.svg" alt="" />
//               <p>Kettle water boiler</p>
//               <span>$30.00</span>
//             </div>
//             <div className="card">
//               <img src="/Placeholders/270x295.svg" alt="" />
//               <p>Congee cooking rice cooker</p>
//               <span>$30.00</span>
//             </div>
//             <div className="card">
//               <img src="/Placeholders/270x295.svg" alt="" />
//               <p>Pizza tomato sauce kebab</p>
//               <span>$30.00</span>
//             </div>
//           </div>
//           <div><button className='btn btn-arrows'>&#60;</button><button className='btn btn-arrows'>&#62;</button></div>
//           <div className="product-container-2">
//             <div className="card">
//               <img src="/Placeholders/370x295.svg" alt="" />
//               <p>Table lamp 1562 LTG modal</p>
//               <span>Best dress for everyone ed totam velit risus viverra <br></br></span>
//               <span>nobis donec recusandae perspiciatis incididuno</span>
//               <h6>POST BY: ADMIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMMENTS 13</h6>
//             </div>
//             <div className="card">
//               <img src="/Placeholders/370x295.svg" alt="" />
//               <p>Table lamp 1562 LTG modal</p>
//               <span>Best dress for everyone ed totam velit risus viverra <br></br></span>
//               <span>nobis donec recusandae perspiciatis incididuno</span>
//               <h6>POST BY: ADMIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMMENTS 13</h6>
//             </div>
//             <div className="card">
//               <img src="/Placeholders/370x295.svg" alt="" />
//               <p>Table lamp 1562 LTG modal</p>
//               <span>Best dress for everyone ed totam velit risus viverra <br></br></span>
//               <span>nobis donec recusandae perspiciatis incididuno</span>
//               <h6>POST BY: ADMIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMMENTS 13</h6>
//             </div>
//           </div>
//         </div>
//         {/* ____________________________________SECTION 5____________________________________ */}
//         <div className="section-5">
//           <div className='container-sub'>
//             <div className='container-input'>
//               <input className='input-mail' type="text" placeholder='Enter your mail here' />
//               <button className='btn btn-sub'>SUBSCRIBE FOR NEWSLETTER</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
import './Section2.scss'
import Card from '../../Card/Card'
import React from 'react'


const Section2 = ({ products }) => {

    return (
        <div className="section-2">
            <h2>Best Collection</h2>
            <ul className="shop-links">
                <li>All</li>
                <p>&#47;</p>
                <li> Bags</li>
                <p>&#47;</p>
                <li> Dress</li>
                <p>&#47;</p>
                <li> Decoration</li>
                <p>&#47;</p>
                <li> Essentials</li>
                <p>&#47;</p>
                <li> Interior</li>
                <p>&#47;</p>
                <li> Laptop</li>
                <p>&#47;</p>
                <li> Mobile</li>
                <p>&#47;</p>
                <li> Beauty</li>
            </ul>
            <div className="product-container">

                {
                    products.lenght > 0
                        ? products.map(product => <Card key={product.id} product={product} />)
                        : <h2>No products to show</h2>
                }

            </div>
            <button className='btn btn-load'>LOAD MORE <img className='icon-sm' src="/Placeholders/rotate-cw.svg" alt="" /></button>
        </div>
    )
}


export default Section2
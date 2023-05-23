import './Card.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ product }) => {
    return (
        <Link to={`/product-details/${product.id}`}>
            <div className="home-product-card">
                <img src={product.imageURL} alt={product.name} />
                <p>{product.name}</p>
                <span>${product.price}</span>
            </div>
        </Link>
    )
}

export default Card
import './Card.scss'
import React from 'react'


const Card = ({ product }) => {
    return (
        <div className="card">
            <img src={product.imageURL} alt={product.name} />
            <p>{product.name}</p>
            <span>${product.price}</span>
        </div>
    )
}

export default Card
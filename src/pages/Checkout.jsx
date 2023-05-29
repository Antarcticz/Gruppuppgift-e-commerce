import '../scssPages/checkout.scss'
import React from 'react'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const { cart } = useSelector(state => state.shoppingCart)

  const placeOrder = () => {
    const order = cart.map(item => {
      return { id: item.product.id, quantity: item.quantity }
    })
    
  }

  return (
    <div className='container-checkout'>
      <h1 className='mt-5 mb-5'>Complete your purchase</h1>
      <ShoppingCart checkout={true} />

      <button className='btn btn-success mt-5 mb-5'>Place Order</button>
    </div>
  )
}

export default Checkout
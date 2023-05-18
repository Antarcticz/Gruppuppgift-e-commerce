// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addProduct } from '../store/features/products/productListSlice'
// const Add = () => {

//     const dispatch = useDispatch()
//     const [productData, setProductData] = useState({
//         name: '',
//         price: '',
//         imageURL: '',
//         description: ''
//     })

//     const handleChange = e => {
//         const { id, value } = e.target
//         setProductData(form => {
//             return {
//                 ...form,
//                 [id]: value
//             }
//         })
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         const data = {
//             ...productData,
//             price: +productData.price
//         }

//         dispatch(addProduct(data))
//     }
// }
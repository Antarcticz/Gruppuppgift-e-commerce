// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import productsService from './productsService'

// const initialState = {
//     products: [],
//     error: null,
//     loading: false
// }

// export const addProduct = createAsyncThunk('product-list/add', async (productData, thunkAPI) => {
//     try {
//         return await productsService.createProduct(productData)
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)

//     }
// })

// export const productsListSlice = createSlice({
//     name: 'Products-list',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(addProduct.pending, (state)=> {
//                 state.loading = true
//             })
//             .addCase(addProduct.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.error = null
//                 state.products = [...state.products, action.payload]
//             })
//             .addCase(addProduct.rejected, (state, action) => {
//                 state.loading = false
//                 state.error = action.payload
//             })
//     }
// })

// export default productsListSlice.reducer
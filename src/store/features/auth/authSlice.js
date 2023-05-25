import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
    user: null,
    loading: false,
    error: null
}

export const registerUser = createAsyncThunk('auth/Registration', async (formData, thunkAPI) => {
    try {
        return await authService.signUp(formData.email, formData.password)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, state => {
            state.loading = true
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    
    }
    
})

export default authSlice.reducer
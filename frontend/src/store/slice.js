import { createSlice } from '@reduxjs/toolkit'

// Initial state for the slice
const initialState = {
value: false}

export const authSlice = createSlice({
  name: 'auth',
  initialState, 
    reducers: {
        login: (state) => {
            state.value = true;
        }
    }
})
import { createSlice } from '@reduxjs/toolkit'

//store den counterReducer ı çekiyorum ve App.jsx e initialState değerlerini döndürebiliyorum
const initialState = {
    value: 1,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1
        }
    },
})
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
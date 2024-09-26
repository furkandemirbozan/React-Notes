import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../redux/CounterSlice"
import userReducer from '../redux/userSlice'

export const store = configureStore({
    reducer: {
        //App.jsx buradaki counter ı gösteriyor buradaki counterReducer ise CounterSlice ımı gösteriyor
        counter: counterReducer,
        user: userReducer
    },
})
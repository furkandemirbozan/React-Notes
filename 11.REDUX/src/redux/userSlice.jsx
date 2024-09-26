import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"





const initialState = {
    users: [],
    loading: false
}

// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId: number, thunkAPI) => {
//       const response = await userAPI.fetchById(userId)
//       return response.data
//     },
//   )

export const getAllUser = createAsyncThunk('users', async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(res.data)
    return res.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //HTTP İsteği olmaz ise burası kullanılır var ise aşağıdaki gibi
    },
    extraReducers: (builder) => {
        //HTTP isteklerinde kullanılır 
    }

})

export const { } = userSlice.actions

export default userSlice.reducer
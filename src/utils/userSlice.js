import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const userSlice = createSlice({
    name:"User",
    initialState: null,
    reducers: {
addUser:(state, action)=>{
    return action.payload;
},
removeUser: (state,action)=>{
    return null;
}
    }
})
export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice(
    {
        name:'GPTState',
        initialState:{
            showGPTSearch : false
        },
        reducers:{
            gptState:(state )=>{
                state.showGPTSearch = !state.showGPTSearch;
            }
        }
    }
)
export const {gptState} = gptSlice.actions;
export default gptSlice.reducer;
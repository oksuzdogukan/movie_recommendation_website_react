import { createSlice } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem("watchList")) || [];

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers:{
        addToWatchList: (state, action) => {
            const film = action.payload
            state.push(film)

            localStorage.setItem("watchList" , JSON.stringify(state));
        },
        removeFromWatchList: (state, action) => {
            const updated = state.filter(film => film.id !== action.payload)
            localStorage.setItem("watchList" , JSON.stringify(updated));
            return updated;
        }
    },
})

export const { addToWatchList , removeFromWatchList} = watchListSlice.actions
export default watchListSlice.reducer


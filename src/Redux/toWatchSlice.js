import { createSlice } from "@reduxjs/toolkit"

export const toWatchSlice = createSlice({
    name: 'toWatch',
    initialState: {
        toWatchItems: []
    },
    reducers: {
        addItemToWatch: (state, action) => {
            const time = new Date().getTime()
            state.toWatchItems.unshift({
                id: time,
                movieID: action.payload.movie.id,
            })
        },
        removeItemFromToWatch: (state, action) => {
            state.toWatchItems = state.toWatchItems.filter((item) => {
                return item.id !== action.payload.toWatchItemId
            })
        }
    }
})

export const getToWatchItems = state => state.toWatch.toWatchItems;
export const {addItemToWatch, removeItemFromToWatch} = toWatchSlice.actions;
export default toWatchSlice.reducer;
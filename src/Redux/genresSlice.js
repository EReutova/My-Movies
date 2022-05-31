import { createSlice } from "@reduxjs/toolkit"; 

export const genresSlice = createSlice({
    name: 'genres',
    initialState: {
        selectedGenre: 'драма'
    },
    reducers: {
        filterGenre: (state, action) => {
            state.selectedGenre = action.payload
        }
    }
})

export const getSelectedGenre = state => state.genres.selectedGenre;
export const { filterGenre } = genresSlice.actions;
export default genresSlice.reducer;
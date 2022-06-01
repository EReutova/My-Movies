import { createSlice } from "@reduxjs/toolkit"; 

export const actorsSlice = createSlice({
    name: 'actors',
    initialState: {
        selectedActor: ''
    },
    reducers: {
        filteredActor: (state, action) => {
            state.selectedActor = action.payload
        }
    }
})

export const getSelectedActor = state => state.actors.selectedActor;
export const { filteredActor } = actorsSlice.actions;
export default actorsSlice.reducer;
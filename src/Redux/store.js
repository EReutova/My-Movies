import { configureStore } from "@reduxjs/toolkit";
import genres from "./genresSlice";
import actors from "./actorsSlice";
import toWatch from "./toWatchSlice";

export const store = configureStore({
    reducer: {
        actors,
        genres,
        toWatch
    },
});
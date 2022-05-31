import { configureStore } from "@reduxjs/toolkit";
import genres from "./genresSlice";
import toWatch from "./toWatchSlice";

export const store = configureStore({
    reducer: {
        genres,
        toWatch
    },
});
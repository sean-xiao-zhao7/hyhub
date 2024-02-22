import { configureStore } from "@reduxjs/toolkit";
import allContentsSlice from "./slices/allContentsSlice";

const store = configureStore({
    reducer: { allContents: allContentsSlice.reducer },
});

export default store;

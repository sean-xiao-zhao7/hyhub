import { configureStore } from "@reduxjs/toolkit";
import allContentsSlice from "./slices/allContentsSlice";
import userContentsSlice from "./slices/userContentsSlice";

const store = configureStore({
    reducer: {
        allContents: allContentsSlice.reducer,
        userContents: userContentsSlice.reducer,
    },
});

export default store;

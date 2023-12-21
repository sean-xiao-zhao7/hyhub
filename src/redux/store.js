import { configureStore } from "@reduxjs/toolkit";
import myContentsSlice from "./slices/myContentsSlice";

const store = configureStore({
    reducer: myContentsSlice.reducer,
});

export default store;

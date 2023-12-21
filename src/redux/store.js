import { configureStore } from "@reduxjs/toolkit";
import myContentsSlice from "./slices/myContentsSlice";

const store = configureStore({
    reducer: { myContents: myContentsSlice },
});

export default store;

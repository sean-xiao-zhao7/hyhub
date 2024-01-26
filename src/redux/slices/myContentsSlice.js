import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Content from "../../models/content";

const myContentsSlice = createSlice({
    name: "myContents",
    initialState: {
        contents: [],
    },
    reducers: {
        addContentAction: (state, action) => {
            const newContent = new Content(
                action.payload.title,
                action.payload.date,
                action.payload.address,
                action.payload.description
            );
            state.contents.push(JSON.stringify(newContent));
        },
        removeContentAction: (state, action) => {
            state.contents.filter(
                (content) => content.id !== action.payload.newContent.id
            );
        },
    },
});

export const { addContentAction, removeContentAction } =
    myContentsSlice.actions;
export default myContentsSlice;

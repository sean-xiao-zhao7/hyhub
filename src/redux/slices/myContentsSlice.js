import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "myContents",
    initialState: {
        contents: [],
    },
    reducers: {
        addContent: (state, action) => {
            state.contents.push(action.payload.newContent);
        },
        removeContent: (state, action) => {
            state.contents.filter(
                (content) => content.id !== action.payload.newContent.id
            );
        },
    },
});

export const { addContent, removeContent } = counterSlice.actions;

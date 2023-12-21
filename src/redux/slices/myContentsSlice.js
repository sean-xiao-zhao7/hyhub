import { createSlice } from "@reduxjs/toolkit";

const myContentsSlice = createSlice({
    name: "myContents",
    initialState: {
        contents: [],
    },
    reducers: {
        addContentAction: (state, action) => {
            state.contents.push(action.payload.newContent);
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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Content from "../../models/content";

export const addContentAction = createAsyncThunk(
    "content/addContentAction",
    async (thunkAPI) => {
        const newContent = new Content(
            action.payload.title,
            action.payload.date,
            action.payload.address,
            action.payload.description
        );
        try {
            await AsyncStorage.setItem("fire-gem-contents", value);
        } catch (err) {
            console.log(err);
        }
        return JSON.stringify(newContent);
    }
);

export const removeContentAction = createAsyncThunk(
    "content/removeContentAction",
    async (thunkAPI) => {
        state.contents.filter(
            (content) => content.id !== action.payload.newContent.id
        );
    }
);

const myContentsSlice = createSlice({
    name: "myContents",
    initialState: {
        contents: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(addContentAction.fulfilled, (state, action) => {
                state.contents.push();
            })
            .addCase(removeContentAction.fulfilled, (state, action) => {
                // remove target event from contents
            });
    },
});

export default myContentsSlice;

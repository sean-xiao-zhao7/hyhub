import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Content from "../../models/content";

export const addContentAction = createAsyncThunk(
    "content/addContentAction",
    async (newContentInput, thunkAPI) => {
        const state = thunkAPI.getState();
        const contents = state.MyContents.contents;

        const newContent = new Content(
            newContentInput.title,
            newContentInput.date,
            newContentInput.address,
            newContentInput.description
        );
        console.log(state);
        contents.push(newContent);
        console.log(contents);

        try {
            const jsonContents = JSON.stringify(contents);
            await AsyncStorage.setItem("fire-gem-contents", jsonContents);
            console.log("got here");
            return contents;
        } catch (err) {
            console.log(err);
        }
    }
);

export const loadContentsAction = createAsyncThunk(
    "content/loadContentsAction",
    async (thunkAPI) => {
        let jsonContents = [];
        try {
            const asyncStorageContents = await AsyncStorage.getItem(
                "fire-gem-contents"
            );
            if (asyncStorageContents) {
                jsonContents = JSON.parse(asyncStorageContents);
            }
        } catch (err) {
            console.log(err);
        }
        return jsonContents;
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
                state.contents = action.payload;
            })
            .addCase(loadContentsAction.fulfilled, (state, action) => {
                state.contents = action.payload;
            })
            .addCase(removeContentAction.fulfilled, (state, action) => {
                // remove target event from contents
            });
    },
});

export default myContentsSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addContentAction = createAsyncThunk(
    "content/addContentAction",
    async (newContentInput, { getState }) => {
        const state = getState();
        try {
            const newContent = {
                id: new Date().toISOString(true),
                title: newContentInput.title,
                date: newContentInput.date,
                address: newContentInput.address,
                description: newContentInput.description,
            };
            const newContents = [...state.myContents.contents, newContent];

            const jsonContents = JSON.stringify(newContents);
            await AsyncStorage.setItem("fire-gem-contents", jsonContents);
            return newContents;
        } catch (err) {
            console.log(err);
        }
    }
);

export const loadContentsAction = createAsyncThunk(
    "content/loadContentsAction",
    async () => {
        try {
            const asyncStorageContents = await AsyncStorage.getItem(
                "fire-gem-contents"
            );
            if (asyncStorageContents) {
                return JSON.parse(asyncStorageContents);
            }
        } catch (err) {
            console.log(err);
        }
    }
);

export const deleteContentAction = createAsyncThunk(
    "content/deleteContentAction",
    async (id, { getState }) => {
        const state = getState();
        const newContents = state.myContents.contents.filter(
            (content) => content.id !== id
        );
        try {
            const jsonContents = JSON.stringify(newContents);
            await AsyncStorage.setItem("fire-gem-contents", jsonContents);
            return newContents;
        } catch (err) {
            console.log(err);
        }
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
            .addCase(deleteContentAction.fulfilled, (state, action) => {
                state.contents = action.payload;
            });
    },
});

export default myContentsSlice;

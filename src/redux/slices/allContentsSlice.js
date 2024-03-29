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
                image: newContentInput.image,
                heart: false,
            };
            const newContents = [...state.allContents.contents, newContent];

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
        try {
            const state = getState();
            const newContents = state.allContents.contents.filter(
                (content) => content.id !== id
            );

            const jsonContents = JSON.stringify(newContents);
            await AsyncStorage.setItem("fire-gem-contents", jsonContents);
            return newContents;
        } catch (err) {
            console.log(err);
        }
    }
);

export const heartContentAction = createAsyncThunk(
    "content/heartContentAction",
    async ({ id, heartVal }, { getState }) => {
        try {
            const state = getState();
            let newContents = [...state.allContents.contents];
            const targetIndex = newContents.findIndex(
                (content) => content.id === id
            );
            newContents.splice(targetIndex, 1, {
                ...newContents[targetIndex],
                heart: heartVal,
            });

            const jsonContents = JSON.stringify(newContents);
            await AsyncStorage.setItem("fire-gem-contents", jsonContents);
            return newContents;
        } catch (err) {
            console.log(err);
        }
    }
);

const allContentsSlice = createSlice({
    name: "allContents",
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
            })
            .addCase(heartContentAction.fulfilled, (state, action) => {
                state.contents = action.payload;
            });
    },
});

export default allContentsSlice;

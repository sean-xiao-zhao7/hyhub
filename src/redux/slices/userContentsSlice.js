import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userAddContentAction = createAsyncThunk(
    "content/useAddContentAction",
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
            const newContents = [...state.myContents.contents, newContent];

            const jsonContents = JSON.stringify(newContents);
            await AsyncStorage.setItem("fire-gem-contents", jsonContents);
            return newContents;
        } catch (err) {
            console.log(err);
        }
    }
);

export const userLoadContentsAction = createAsyncThunk(
    "content/userLoadContentsAction",
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

export const userDeleteContentAction = createAsyncThunk(
    "content/userDeleteContentAction",
    async (id, { getState }) => {
        try {
            const state = getState();
            const newContents = state.myContents.contents.filter(
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

const userContentsSlice = createSlice({
    name: "userContents",
    initialState: {
        userContents: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(userAddContentAction.fulfilled, (state, action) => {
                state.contents = action.payload;
            })
            .addCase(userLoadContentsAction.fulfilled, (state, action) => {
                state.contents = action.payload;
            })
            .addCase(userDeleteContentAction.fulfilled, (state, action) => {
                state.contents = action.payload;
            });
    },
});

export default userContentsSlice;

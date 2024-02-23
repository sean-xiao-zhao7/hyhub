import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userAddContentAction = createAsyncThunk(
    "content/userAddContentAction",
    async (newContentInput, { getState }) => {
        const state = getState();
        try {
            const newUserContents = [
                ...state.userContents.contents,
                newContentInput,
            ];

            const jsonContents = JSON.stringify(newUserContents);
            await AsyncStorage.setItem("fire-gem-user-contents", jsonContents);
            return newUserContents;
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
                "fire-gem-user-contents"
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
            const newUserContents = state.userContents.contents.filter(
                (content) => content.id !== id
            );

            const jsonContents = JSON.stringify(newUserContents);
            await AsyncStorage.setItem("fire-gem-user-contents", jsonContents);
            return newUserContents;
        } catch (err) {
            console.log(err);
        }
    }
);

const userContentsSlice = createSlice({
    name: "userContents",
    initialState: {
        contents: [],
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

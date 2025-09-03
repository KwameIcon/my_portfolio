"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface BackgroundState {
    image: string;
    color: string;
}


const initialState: BackgroundState = {image: "/bg/skills.jpg", color: "cyan"};


const backgroundSlice = createSlice({
    name: "background",
    initialState,
    reducers: {
        resetBackgroundImage: (state) => {
            state.image = initialState.image;
            state.color = initialState.color;
        },
        setBackgroundImage: (state, action: PayloadAction<string>) => {
            state.image = action.payload;
        },
        setBackgroundColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        }
    }
})


export const {setBackgroundImage, setBackgroundColor} = backgroundSlice.actions;
export default backgroundSlice.reducer;
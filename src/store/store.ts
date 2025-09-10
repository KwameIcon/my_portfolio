"use client";
import { configureStore } from "@reduxjs/toolkit";
import mouseReducer from "./slice/mouseSlice";
import backgroundReducer from "./slice/backgroundSlice";
import taskbarReducer from "./slice/taskbarSlice";



export const store = configureStore({
    reducer: {
        mouse: mouseReducer,
        background: backgroundReducer,
        taskbar: taskbarReducer,
    }
})


// Types for use in hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
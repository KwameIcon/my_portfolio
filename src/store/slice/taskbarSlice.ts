"use client"
import { createSlice } from "@reduxjs/toolkit";
import { Settings2Icon } from "lucide-react";
import { FaAppStore, FaCode, FaEdge, FaFile, FaMusic, FaTerminal, FaVideo } from "react-icons/fa";
import { ImFinder } from "react-icons/im";



export interface Icon {
    id: string;
    icon: string;
    tooltipText: string;
    isOpen: boolean;
}



export const Icons = {
    finder: ImFinder,
    edge: FaEdge,
    code: FaCode,
    terminal: FaTerminal,
    videos: FaVideo,
    music: FaMusic,
    files: FaFile,
    apps: FaAppStore,
    settings: Settings2Icon
}



interface TaskbarState {
    taskbarIcons: Icon[]
}


const initialState: TaskbarState = {
    taskbarIcons: [
        { id: "finder", icon: "finder", tooltipText: "Finder", isOpen: false },
        { id: "edge", icon: "edge", tooltipText: "Edge", isOpen: false },
        { id: "code", icon: "code", tooltipText: "VS Code", isOpen: false },
        { id: "terminal", icon: "terminal", tooltipText: "Terminal", isOpen: false },
        { id: "settings", icon: "settings", tooltipText: "Settings", isOpen: false },
        { id: "apps", icon: "apps", tooltipText: "Apps", isOpen: false },
        { id: "files", icon: "files", tooltipText: "Files", isOpen: false },
        { id: "music", icon: "music", tooltipText: "Music", isOpen: false },
        { id: "videos", icon: "videos", tooltipText: "Videos", isOpen: false },
    ]

}



const taskbarSlice = createSlice({
    name: "taskbar",
    initialState,
    reducers: {
        addTaskbarIcon: (state, action) => {
            state.taskbarIcons.push(action.payload);
        },
        removeTaskbarIcon: (state, action) => {
            state.taskbarIcons = state.taskbarIcons.filter(icon => icon.id !== action.payload.id);
        },
        toggleTaskbarIcon: (state, action) => {
            console.log("Toggling icon with id:", action.payload.id);
            const icon = state.taskbarIcons.find(icon => icon.id === action.payload.id);
            if (icon) {
                icon.isOpen = !icon.isOpen;
            }
        }
    }
})


export const { addTaskbarIcon, removeTaskbarIcon, toggleTaskbarIcon } = taskbarSlice.actions;
export default taskbarSlice.reducer;

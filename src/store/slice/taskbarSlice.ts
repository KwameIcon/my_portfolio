"use client";
import { createSlice } from "@reduxjs/toolkit";
import { LocateIcon, Settings2Icon } from "lucide-react";
import { FaAppStore, FaCode, FaEdge, FaFile, FaMusic, FaTerminal, FaVideo } from "react-icons/fa";
import { GrProjects, GrResume } from "react-icons/gr";
import { ImFinder } from "react-icons/im";
import { MdContactPage } from "react-icons/md";



export interface Icon {
    id: string;
    icon: string;
    tooltipText: string;
    isOpen: boolean;
    isMaximized: boolean;
    isMinimized: boolean;
    active: boolean;
}



export let Icons: { [key: string]: React.ElementType } = {
    finder: ImFinder,
    edge: FaEdge,
    code: FaCode,
    terminal: FaTerminal,
    videos: FaVideo,
    music: FaMusic,
    files: FaFile,
    apps: FaAppStore,
    settings: Settings2Icon,
    resume: GrResume,
    projects: GrProjects,
    contact: MdContactPage,
    locate : LocateIcon 
};



interface TaskbarState {
    taskbarIcons: Icon[]
}


const initialState: TaskbarState = {
    taskbarIcons: [
        { id: "finder", icon: 'finder', tooltipText: "Finder", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "edge", icon: 'edge', tooltipText: "Edge", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "code", icon: 'code', tooltipText: "VS Code", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "terminal", icon: 'terminal', tooltipText: "Terminal", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "settings", icon: 'settings', tooltipText: "Settings", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "apps", icon: 'apps', tooltipText: "Apps", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "files", icon: 'files', tooltipText: "Files", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "music", icon: 'music', tooltipText: "Music", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "videos", icon: 'videos', tooltipText: "Videos", isOpen: false, isMaximized: false, isMinimized: false, active: false },
    ]

}



const taskbarSlice = createSlice({
    name: "taskbar",
    initialState,
    reducers: {
        addTaskbarIcon: (state, action) => {
            const newIcon = action.payload as Icon;
            if (state.taskbarIcons.some((icon) => icon.id === newIcon.id)) {
                return;
            }
            state.taskbarIcons.push({ ...newIcon, isOpen: true, isMaximized: false, isMinimized: false, active: true });
        },
        removeTaskbarIcon: (state, action) => {
            state.taskbarIcons = state.taskbarIcons.filter(icon => icon.id !== action.payload.id);

        },
        openTaskbarIcon: (state, action) => {
            const icon = state.taskbarIcons.find(icon => icon.id === action.payload.id);
            if (icon) {
                icon.isMinimized = false;
                icon.isOpen = true;
                icon.active = true;
            }
        },
        closeTaskbarIcon: (state, action) => {
            const icon = state.taskbarIcons.find(icon => icon.id === action.payload.id);
            if (icon) {
                icon.isOpen = false;
                icon.active = false;
            }
        },
        toggleMaximized: (state, action) => {
            const icon = state.taskbarIcons.find(icon => icon.id === action.payload.id);
            if (icon) {
                icon.isMinimized = false;
                icon.isMaximized = !icon.isMaximized;
            }
        },
        toggleMinimized: (state, action) => {
            const icon = state.taskbarIcons.find(icon => icon.id === action.payload.id);
            if (icon) {
                icon.isOpen = false;
                icon.isMinimized = !icon.isMinimized;
            }
        },
    }
})


export const { addTaskbarIcon, removeTaskbarIcon, openTaskbarIcon, closeTaskbarIcon, toggleMaximized, toggleMinimized } = taskbarSlice.actions;
export default taskbarSlice.reducer;

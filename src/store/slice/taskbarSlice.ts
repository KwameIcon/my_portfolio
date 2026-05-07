"use client";
import { createSlice } from "@reduxjs/toolkit";
import { LocateIcon } from "lucide-react";
import { FaEdge } from "react-icons/fa";
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
    zIndex: number;
}



export const Icons: { [key: string]: React.ElementType } = {
    finder: ImFinder,
    edge: FaEdge,
    resume: GrResume,
    projects: GrProjects,
    contact: MdContactPage,
    locate: LocateIcon,
};



interface TaskbarState {
    taskbarIcons: Icon[];
    nextZIndex: number;
}


const initialState: TaskbarState = {
    taskbarIcons: [
        { id: "finder", icon: "finder", tooltipText: "Finder", isOpen: false, isMaximized: false, isMinimized: false, active: false, zIndex: 1 },
        { id: "edge", icon: "edge", tooltipText: "Edge", isOpen: false, isMaximized: false, isMinimized: false, active: false, zIndex: 1 },
        { id: "resume", icon: "resume", tooltipText: "Resume", isOpen: false, isMaximized: false, isMinimized: false, active: false, zIndex: 1 },
        { id: "projects", icon: "projects", tooltipText: "My Projects", isOpen: false, isMaximized: false, isMinimized: false, active: false, zIndex: 1 },
        { id: "contact", icon: "contact", tooltipText: "Contact Me", isOpen: false, isMaximized: false, isMinimized: false, active: false, zIndex: 1 },
        { id: "locate", icon: "locate", tooltipText: "Location", isOpen: false, isMaximized: false, isMinimized: false, active: false, zIndex: 1 },
    ],
    nextZIndex: 2,
};

const setActiveWindow = (state: TaskbarState, targetId: string) => {
    state.taskbarIcons.forEach((icon) => {
        icon.active = icon.id === targetId;
    });
};



const taskbarSlice = createSlice({
    name: "taskbar",
    initialState,
    reducers: {
        addTaskbarIcon: (state, action) => {
            const newIcon = action.payload as Icon;
            const icon = state.taskbarIcons.find((item) => item.id === newIcon.id);

            if (icon) {
                setActiveWindow(state, icon.id);
                icon.isMinimized = false;
                icon.isOpen = true;
                icon.zIndex = state.nextZIndex++;
                return;
            }

            setActiveWindow(state, newIcon.id);
            state.taskbarIcons.push({
                ...newIcon,
                isOpen: true,
                isMaximized: false,
                isMinimized: false,
                active: true,
                zIndex: state.nextZIndex++,
            });
        },
        openTaskbarIcon: (state, action) => {
            const icon = state.taskbarIcons.find((item) => item.id === action.payload.id);
            if (icon) {
                setActiveWindow(state, icon.id);
                icon.isMinimized = false;
                icon.isOpen = true;
                icon.zIndex = state.nextZIndex++;
            }
        },
        closeTaskbarIcon: (state, action) => {
            const icon = state.taskbarIcons.find((item) => item.id === action.payload.id);
            if (icon) {
                icon.isOpen = false;
                icon.isMinimized = false;
                icon.isMaximized = false;
                icon.active = false;
            }
        },
        toggleMaximized: (state, action) => {
            const icon = state.taskbarIcons.find((item) => item.id === action.payload.id);
            if (icon) {
                setActiveWindow(state, icon.id);
                icon.isMinimized = false;
                icon.isOpen = true;
                icon.isMaximized = !icon.isMaximized;
                icon.zIndex = state.nextZIndex++;
            }
        },
        toggleMinimized: (state, action) => {
            const icon = state.taskbarIcons.find((item) => item.id === action.payload.id);
            if (icon) {
                icon.isOpen = false;
                icon.isMinimized = true;
                icon.isMaximized = false;
                icon.active = false;
            }
        },
        focusTaskbarIcon: (state, action) => {
            const icon = state.taskbarIcons.find((item) => item.id === action.payload.id);
            if (icon && icon.isOpen) {
                setActiveWindow(state, icon.id);
                icon.zIndex = state.nextZIndex++;
            }
        },
    },
});


export const { addTaskbarIcon, openTaskbarIcon, closeTaskbarIcon, toggleMaximized, toggleMinimized, focusTaskbarIcon } = taskbarSlice.actions;
export default taskbarSlice.reducer;

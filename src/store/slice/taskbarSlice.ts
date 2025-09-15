"use client";;
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
    taskbarIcons: Icon[]
}


const initialState: TaskbarState = {
    taskbarIcons: [
        { id: "finder", icon: 'finder', tooltipText: "Finder", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "edge", icon: 'edge', tooltipText: "Edge", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "resume", icon: 'resume', tooltipText: "Resume", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "projects", icon: 'projects', tooltipText: "My Projects", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "contact", icon: 'contact', tooltipText: "Contact Me", isOpen: false, isMaximized: false, isMinimized: false, active: false },
        { id: "locate", icon: 'locate', tooltipText: "Location", isOpen: false, isMaximized: false, isMinimized: false, active: false },
    ]

}



const taskbarSlice = createSlice({
    name: "taskbar",
    initialState,
    reducers: {
        addTaskbarIcon: (state, action) => {
            const newIcon = action.payload as Icon;
            if (state.taskbarIcons.some((icon) => icon.id === newIcon.id)) {
                const icon = state.taskbarIcons.find(icon => icon.id === newIcon.id);
                if (icon) {
                    icon.isMinimized = false;
                    icon.isOpen = true;
                    icon.active = true;
                }
            }
            state.taskbarIcons.push({ ...newIcon, isOpen: true, isMaximized: false, isMinimized: false, active: true });
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


export const { addTaskbarIcon, openTaskbarIcon, closeTaskbarIcon, toggleMaximized, toggleMinimized } = taskbarSlice.actions;
export default taskbarSlice.reducer;

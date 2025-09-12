"use client";;
import CustomBrowser from "@/components/browse";
import TaskBar from "@/components/commons/taskbar";
import TopNotch from "@/components/commons/topNotch";
import ContactMe from "@/components/contact";
import Finder from "@/components/finder";
import LocateMe from "@/components/location";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import { Icon } from "@/store/slice/taskbarSlice";
import { RootState } from "@/store/store";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";





export default function IKOS() {

    // Get the background image from the Redux store
    const [openedFiles, setOpenedFiles] = useState<string[]>([]);
    const backgroundImage = useSelector((state: RootState) => state.background.image);
    const files = useSelector((state: RootState) => state.taskbar.taskbarIcons);


    useEffect(() => {
        const requestFullScreen = () => {
            const el = document.documentElement;
            if (el.requestFullscreen) {
                el.requestFullscreen();
            } else if ((el as any).webkitRequestFullscreen) {
                (el as any).webkitRequestFullscreen();
            } else if ((el as any).msRequestFullscreen) {
                (el as any).msRequestFullscreen();
            }
        };

        requestFullScreen();

    }, []);


    useEffect(() => {
        setOpenedFiles(files.filter((file: Icon) => file.isOpen).map((file: Icon) => file.id));
    }, [files]);


    return (
        <div className="w-screen h-screen overflow-hidden relative bg-blue-500 scrollbar-hide">


            <AnimatePresence mode="sync">
                <motion.div
                    key={backgroundImage}
                    // animation from offscreen to onscreen
                    initial={{
                        opacity: 0,
                        x: "-100%",
                        y: 0,
                        scale: 1.2,
                    }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: "100%", y: 0, scale: 1.2 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={backgroundImage}
                        alt="IKOS Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Top Notch */}
            <TopNotch />

            {/* Finder */}
            <Finder />

            {/* Projects */}
            <Projects/>

            {/* Resume */}
            <Resume />

            {/* Contact me */}
            <ContactMe/>

            {/* Locate me */}
            <LocateMe />

            {/* Browser */}
            <CustomBrowser />

            {/* Taskbar */}
            <TaskBar />
        </div>
    );
}
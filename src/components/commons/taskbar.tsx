"use client";
import { Icon, Icons, toggleTaskbarIcon } from "@/store/slice/taskbarSlice";
import { motion } from "framer-motion";
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from "react-redux";
import { colorClassMap } from "./topNotch";




export type IconProps = React.HTMLAttributes<SVGElement>;




export default function TaskBar(){


    const iconColor = useSelector((state: any) => state.background.color);
    const taskbarIcons = useSelector((state: any) => state.taskbar.taskbarIcons);
    const dispatch = useDispatch();



    const handleIconClick = (id: string) => {
        console.log("Icon clicked:", id);
        dispatch(toggleTaskbarIcon({ id }));
        console.log("Current taskbar icons:", taskbarIcons);
    };



    return(
        <div className="w-full absolute bottom-0 pb-2 left-0 flex items-center justify-center">
                <ul className={`w-fit min-h-14 rounded-xl p-3 flex items-center justify-center gap-3 ${colorClassMap(iconColor)} border border-black/10`} >
                    {taskbarIcons.map((icon: Icon) => {
                        const IconComponent = Icons[icon.icon as keyof typeof Icons];
                        return (
                            <li key={icon.id} className="list-none icon" id={`icon-${icon.id}`}>
                                <motion.div
                                    onClick={() => handleIconClick(icon.id)}
                                    whileHover={{ scale: 1.2, y: -15 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className=""
                                >
                                    <Button 
                                    tooltip={icon.tooltipText} 
                                    tooltipOptions={{ 
                                        position: 'top', 
                                        mouseTrack: true, 
                                        mouseTrackTop: 15, 
                                        style: {
                                            backgroundColor: '#333', 
                                            color: 'white',
                                            paddingLeft: '10px',
                                            paddingRight: '10px',
                                            borderRadius: '5px',
                                        } 
                                }} 
                                    className="w-12 h-12 border border-black/10 bg-gray-200/5 rounded-full"
                                    >
                                        <IconComponent className="w-full h-full p-2" style={{ color: iconColor }} />
                                    </Button>
                                </motion.div>
                            </li>

                        );
                    })}
                </ul>
            </div>
    )
}
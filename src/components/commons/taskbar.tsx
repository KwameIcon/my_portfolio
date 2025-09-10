"use client";;
import { Icon, Icons, openTaskbarIcon } from "@/store/slice/taskbarSlice";
import { Tooltip } from "antd";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";




export type IconProps = React.HTMLAttributes<SVGElement>;




export default function TaskBar() {


    const iconColor = useSelector((state: any) => state.background.color);
    const taskbarIcons = useSelector((state: any) => state.taskbar.taskbarIcons);
    const dispatch = useDispatch();



    const handleIconClick = (id: string) => {
        dispatch(openTaskbarIcon({ id: id }));
    };



    return (
        <div className="w-full absolute bottom-0 pb-2 left-0 flex items-center justify-center z-50">
            <ul className={`w-fit min-h-14 rounded-xl p-3 flex items-center justify-center gap-3 border border-black/10`} >
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
                                <Tooltip title={icon.tooltipText}>
                                    <div className={`!w-12 !h-12 !border !border-black/10 ${icon.active ? '!bg-[#0F4774]' : '!bg-gray-200/5'} !rounded-full`}>
                                        <IconComponent className="w-full h-full p-2" style={{ color: iconColor }} />
                                    </div>
                                </Tooltip>
                            </motion.div>
                        </li>

                    );
                })}
            </ul>
        </div>
    )
}
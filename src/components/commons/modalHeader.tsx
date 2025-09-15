import { closeTaskbarIcon, toggleMaximized, toggleMinimized } from "@/store/slice/taskbarSlice";
import { Maximize, Minus, X } from "lucide-react";
import { useDispatch } from "react-redux";


interface ModalHeaderProps {
    title: string;
    id: string;
    isMinimized: boolean | undefined;
}



export default function ModalHeader({ title, id, isMinimized }: ModalHeaderProps) {

    const dispatch = useDispatch();





    return(
        <div className="absolute top-0 left-0 w-full h-10 bg-[#0F4774] flex items-center justify-center">
            <span className="font-semibold w-fit h-5 px-5 bg-white text-[#0F4774] font-mono italic rounded-full flex items-center justify-center">{title}</span>
            <ul className={`absolute right-0 h-full w-fit px-5 flex items-center justify-center gap-3 group ${isMinimized ? "hidden" : ''}`}>
                <li className="w-5 h-5 flex items-center justify-center cursor-pointer rounded-full bg-amber-400" onClick={() => dispatch(toggleMinimized({ id: id }))}><Minus size={12} className="group-hover:block hidden"/> </li>
                <li className="w-5 h-5 flex items-center justify-center cursor-pointer rounded-full bg-green-400" onClick={() => dispatch(toggleMaximized({ id: id }))}><Maximize size={12} className="group-hover:block hidden"/></li>
                <li className="w-5 h-5 flex items-center justify-center cursor-pointer rounded-full bg-red-400" onClick={() => dispatch(closeTaskbarIcon({ id: id }))}><X size={12} className="group-hover:block hidden"/></li>
            </ul>
        </div>
    )
}
import { Maximize, Minus, X } from "lucide-react";


interface ModalHeaderProps {
    title: string;
}



export default function ModalHeader({ title }: ModalHeaderProps) {


    return(
        <div className="absolute top-0 left-0 w-full h-10 bg-[#0F4774] flex items-center justify-center">
            <span className="font-semibold w-fit h-5 px-5 bg-white text-[#0F4774] font-mono italic rounded-full flex items-center justify-center">{title}</span>
            <ul className="absolute right-0 h-full w-fit px-5 flex items-center justify-center gap-3 group">
                <li className="w-5 h-5 flex items-center justify-center cursor-pointer rounded-full bg-amber-400"><Minus size={12} className="group-hover:block hidden"/> </li>
                <li className="w-5 h-5 flex items-center justify-center cursor-pointer rounded-full bg-green-400"><Maximize size={12} className="group-hover:block hidden"/></li>
                <li className="w-5 h-5 flex items-center justify-center cursor-pointer rounded-full bg-red-400"><X size={12} className="group-hover:block hidden"/></li>
            </ul>
        </div>
    )
}
import { Settings2Icon } from "lucide-react";
import { FaAppStore, FaCode, FaEdge, FaFile, FaMusic, FaTerminal, FaVideo } from "react-icons/fa";
import { ImFinder } from "react-icons/im";




export interface Icon {
    id: string;
    icon: React.ElementType;
    tooltipText: string;
    isOpen: boolean;
}



export const TASKBAR_ICONS: Icon[] =  [
        { id: "finder", icon: ImFinder, tooltipText: "Finder", isOpen: false },
        { id: "edge", icon: FaEdge, tooltipText: "Edge", isOpen: false },
        { id: "code", icon: FaCode, tooltipText: "VS Code", isOpen: false },
        { id: "terminal", icon: FaTerminal, tooltipText: "Terminal", isOpen: false },
        { id: "settings", icon: Settings2Icon, tooltipText: "Settings", isOpen: false },
        { id: "apps", icon: FaAppStore, tooltipText: "Apps", isOpen: false },
        { id: "files", icon: FaFile, tooltipText: "Files", isOpen: false },
        { id: "music", icon: FaMusic, tooltipText: "Music", isOpen: false },
        { id: "videos", icon: FaVideo, tooltipText: "Videos", isOpen: false },
    ]
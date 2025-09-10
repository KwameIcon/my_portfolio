import { useSelector } from "react-redux";
import CustomeModal from "./commons/modal";
import { useState } from "react";
import { projectsTabs } from "@/data/projects";






export default function Projects() {
  const projects = useSelector((state: any) => state.taskbar.taskbarIcons.find((icon: any) => icon.id === 'projects'));
  const [currentTabContent, setCurrentTabContent] = useState(projectsTabs[0].content);
  const [activeTab, setActiveTab] = useState(projectsTabs[0].id);


  const handleTabClick = (tabId: string) => {
    setCurrentTabContent(projectsTabs.find((tab) => tab.id === tabId)?.content || projectsTabs[0].content);
    setActiveTab(tabId);
  };


  return (
    <CustomeModal title="My Projects" type="projects" id="projects">
        <aside className="absolute top-0 left-0 w-3/12 h-full flex flex-col bg-[#EEEEEE]">
          <ul className="w-full h-full flex flex-col">
            {projectsTabs.map((tab) => (
              <li key={tab.id} className={`cursor-pointer text-lg font-bold ${activeTab === tab.id ? 'bg-[#3498DB] text-white/80' : 'hover:bg-gray-300'} p-2 text-black/70 h-16 flex items-center justify-start gap-3`} onClick={() => handleTabClick(tab.id)}>
                <tab.icon className={`inline-block m-2 text-xl font-bold ${activeTab === tab.id ? 'text-white/80' : 'text-black/70'}`} />
                <span>{tab.label}</span>
              </li>
            ))}
          </ul>
        </aside>
        <aside className="absolute top-0 right-0 w-9/12 h-[93%] p-4 overflow-y-scroll scrollbar-hide">
            {currentTabContent}
        </aside>
    </CustomeModal>
  );
}
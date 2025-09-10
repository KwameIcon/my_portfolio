import CustomeModal from "./commons/modal";
import { useState } from "react";
import { resumeTabs } from "@/data/resume";






export default function Resume() {
  const [currentTabContent, setCurrentTabContent] = useState(resumeTabs[0].content);
  const [activeTab, setActiveTab] = useState(resumeTabs[0].id);


  const handleTabClick = (tabId: string) => {
    setCurrentTabContent(resumeTabs.find((tab) => tab.id === tabId)?.content || resumeTabs[0].content);
    setActiveTab(tabId);
  };


  return (
    <CustomeModal title="Resume" type="resume" id="resume">
        <aside className="absolute top-0 left-0 w-3/12 h-full flex flex-col bg-[#EEEEEE]">
          <ul className="w-full h-full flex flex-col">
            {resumeTabs.map((tab) => (
              <li key={tab.id} className={`cursor-pointer text-lg font-bold ${activeTab === tab.id ? 'bg-[#3498DB] text-white/80' : 'hover:bg-gray-300'} p-2 text-black/70 h-16 flex items-center justify-start gap-3`} onClick={() => handleTabClick(tab.id)}>
                <tab.icon className={`inline-block m-2 text-lg font-bold ${activeTab === tab.id ? 'text-white/80' : 'text-black/70'}`} />
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
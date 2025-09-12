import { useState } from "react";
import CustomeModal from "./commons/modal";
import { FaMicrosoft, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

export default function EdgeBrowser() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      window.open(
        `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
        "_blank"
      );
    }
  };

  return (
    <CustomeModal title="Microsoft Edge" type="browse" id="browse">
      <div 
        style={{
            backgroundImage: "url('/bg/skyblue.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full flex flex-col items-center bg-gradient-to-b from-sky-50 to-white"
      >
        {/* Top Bar */}
        <div className="w-full h-14 flex items-center px-4 bg-sky-100 border-b border-gray-300">
          <FaMicrosoft className="text-sky-600 text-2xl mr-3" />
          <span className="font-semibold text-gray-700">Microsoft Edge</span>
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-8 flex items-center space-x-2">
            <FaMicrosoft className="text-blue-600 text-4xl" />
            <span className="text-3xl font-bold text-white">Edge</span>
          </div>

          {/* Search bar */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search the web"
            className="w-2/3 max-w-2xl h-12 px-5 rounded-full border border-gray-300 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          {/* Quick links */}
          <div className="mt-10 grid grid-cols-4 gap-6">
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="flex flex-col items-center text-blue-600 hover:text-cyan-600"
            >
              <FaYoutube className="text-3xl" />
              <span className="text-sm mt-2 text-white">YouTube</span>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="flex flex-col items-center text-blue-600 hover:text-cyan-600"
            >
              <FaLinkedin className="text-3xl" />
              <span className="text-sm mt-2 text-white">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="flex flex-col items-center text-blue-600 hover:text-cyan-600"
            >
              <FaGithub className="text-3xl" />
              <span className="text-sm mt-2 text-white">GitHub</span>
            </a>
            <a
              href="https://www.microsoft.com"
              target="_blank"
              className="flex flex-col items-center text-blue-600 hover:text-cyan-600"
            >
              <FaMicrosoft className="text-3xl" />
              <span className="text-sm mt-2 text-white">Microsoft</span>
            </a>
          </div>
        </div>
      </div>
    </CustomeModal>
  );
}

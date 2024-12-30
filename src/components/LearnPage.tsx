import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const LearnPage: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex min-h-screen">
      {/* Mobile Hamburger Menu */}
      <button
        className="text-white p-4 bg-black md:hidden fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex-1 bg-black transition-transform ${
          isSidebarVisible ? "opacity-50 pointer-events-none md:pointer-events-auto" : "opacity-100"
        }`}
        onClick={() => isSidebarVisible && toggleSidebar()}
      >
        <MainContent />
      </div>
    </div>
  );
};

export default LearnPage;

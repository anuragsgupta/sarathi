import React from "react";
import {
  GraduationCap,
  Users,
  Bookmark,
  Flag,
  LayoutDashboard,
} from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isVisible: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, toggleSidebar }) => {
  return (
    <div
    className={`fixed top-0 left-0 h-screen w-64 bg-black p-4 z-50 transition-transform ${
      isVisible ? "translate-x-0" : "-translate-x-full"
    } md:static md:translate-x-0`}
    >
      
      <div className="text-white text-2xl font-bold mb-8 text-center md:text-left">
        Sarathi AI
      </div>

      <nav className="space-y-4">
        {/* Close Button for Mobile */}
        <button
          className="text-white md:hidden absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          ✕
        </button>

        {/* Profile Link */}
        <div className="text-gray-300 flex items-center gap-3 p-2">
          <LayoutDashboard size={20} />
          <Link to="/" className="hover:text-white">
            Profile
          </Link>
        </div>

        {/* Learn Link */}
        <div className="bg-white text-black flex items-center gap-3 p-2 rounded-lg">
          <GraduationCap size={20} />
          <Link to="/learn" className="hover:text-black">
            Learn
          </Link>
        </div>

        {/* Team Pathways Link */}
        <div className="text-gray-300 flex items-center gap-3 p-2">
          <Users size={20} />
          <Link to="/team-pathways" className="hover:text-white">
            Team Pathways
          </Link>
        </div>

        {/* Bookmark Link */}
        <div className="text-gray-300 flex items-center gap-3 p-2">
          <Bookmark size={20} />
          <Link to="/bookmarks" className="hover:text-white">
            Bookmark
          </Link>
        </div>

        {/* Projects Link */}
        <div className="text-gray-300 flex items-center gap-3 p-2">
          <Flag size={20} />
          <Link to="/projects" className="hover:text-white">
            Projects
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

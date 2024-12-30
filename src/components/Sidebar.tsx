import React from 'react';
import { GraduationCap, Users, Bookmark, Flag, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom'; // You can use Link for navigation in React Router

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-black h-screen p-4">
      <div className="text-white text-2xl font-bold mb-8">Sarathi</div>

      <nav className="space-y-4">
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

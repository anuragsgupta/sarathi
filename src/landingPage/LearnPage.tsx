import { GraduationCap, Users, Bookmark, Flag, LayoutDashboard } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg-black h-screen p-4">
    <div className="text-white text-2xl font-bold mb-8">Sarathi</div>
    
    <nav className="space-y-4">
      <div className="text-gray-300 flex items-center gap-3 p-2">
        <LayoutDashboard size={20} />
        <span>Profile</span>
      </div>
      
      <div className="bg-white text-black flex items-center gap-3 p-2 rounded-lg">
        <GraduationCap size={20} />
        <span>Learn</span>
      </div>
      
      <div className="text-gray-300 flex items-center gap-3 p-2">
        <Users size={20} />
        <span>Team Pathways</span>
      </div>
      
      <div className="text-gray-300 flex items-center gap-3 p-2">
        <Bookmark size={20} />
        <span>Bookmark</span>
      </div>
      
      <div className="text-gray-300 flex items-center gap-3 p-2">
        <Flag size={20} />
        <span>Projects</span>
      </div>
    </nav>
  </div>
);

const MainContent = () => (
  <div className="flex-1 bg-black p-8">
    <div className="max-w-2xl mx-auto mt-48">
      <h1 className="text-white text-5xl mb-12">What do you want to learn today?</h1>
      
      <div className="bg-zinc-900 rounded-xl p-6">
        <input 
          type="text"
          placeholder="I want to learn python programming"
          className="w-full bg-transparent text-white text-xl outline-none"
        />
        <div className="flex justify-end mt-4">
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium flex items-center gap-2">
            Start Learning
            <span>▶</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function LearnPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}
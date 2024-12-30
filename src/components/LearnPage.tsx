import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { generateLearningRoadmap } from "../utils/geminiRoadmapGenerator";

const MainContent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setError("");
  };

  const handleStartLearning = async () => {
    try {
      setIsLoading(true);
      setError("");

      // Get API key from environment variable or configuration
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      // const apiKey = "AIzaSyBI8E4twsP0ZskyFmXw_DweN_oQ7cFgjt8";
      
      if (!apiKey) {
        throw new Error("API key not configured");
      }

      const roadmapData = await generateLearningRoadmap(inputValue, apiKey);
      console.log(roadmapData);
      navigate("/sarathi/roadmap", { state: { roadmapData } });
    } catch (error: unknown) {
      console.error("Error generating roadmap:", error);
      if (error instanceof Error) {
        setError(error.message || "Failed to generate roadmap");
      } else {
        setError("Failed to generate roadmap");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-black p-8">
      <div className="max-w-2xl mx-auto mt-48">
        <h1 className="text-white text-5xl mb-12">What do you want to learn today?</h1>
        <div className="bg-zinc-900 rounded-xl p-6">
          <input
            type="text"
            
            placeholder="I want to learn Python programming"
            className="w-full bg-transparent text-white text-xl outline-none"
            value={inputValue}
            onChange={handleInputChange}
          />
          {error && (
            <p className="text-red-500 mt-2 text-sm">{error}</p>
          )}
          <div className="flex justify-end mt-4">
            <button
              onClick={handleStartLearning}
              disabled={isLoading || !inputValue.trim()}
              className="bg-white text-black px-6 py-2 rounded-full font-medium flex items-center gap-2 disabled:opacity-50"
            >
              {isLoading ? "Generating..." : "Start Learning"}
              {!isLoading && <span>▶</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const LearnPage: React.FC = () => (
  <div className="flex min-h-screen">
    <Sidebar />
    <MainContent />
  </div>
);

export default LearnPage;
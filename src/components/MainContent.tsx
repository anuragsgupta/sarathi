import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
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
  
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error("API key not configured");
        }
  
        const roadmapData = await generateLearningRoadmap(inputValue, apiKey);
        console.log(roadmapData);
        navigate("/roadmap", { state: { roadmapData } });
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
        <div className="flex-1 bg-black p-6 md:p-8">
          {/* <h1 className="flex justify-center text-3xl md:text-5xl text-pretty font-bold   text-slate-300">Sarathi AI</h1> */}
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-breathe flex justify-center">
    Sarathi AI
</h1>

        <div className="max-w-2xl my-auto  mx-auto mt-24 md:mt-48">
          <h1 className="text-white  justify-center flex   text-xl md:text-5xl mb-6 md:mb-12">
            What do you want to learn today?
          </h1>
          <div className="bg-zinc-900  rounded-xl p-4 md:p-6">
            <input
              type="text"
              placeholder="I want to learn Python programming"
              className="w-full bg-transparent text-white text-base md:text-xl outline-none"
              value={inputValue}
              onChange={handleInputChange}
            />
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
            <div className="flex mt-4  justify-center">
              <button
                onClick={handleStartLearning}
                disabled={isLoading || !inputValue.trim()}
                className="bg-white text-black px-4 md:px-6 py-2 rounded-full font-medium flex items-center gap-2 disabled:opacity-50"
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
  export default MainContent;
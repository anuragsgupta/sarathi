import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
// import generateText from "../utils/generateText";

const MainContent = () => {
  const [inputValue, setInputValue] = useState("");
  // const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleStartLearning = async () => {
    // try {
    //   // const response = await generateText(inputValue);
    //   const jsonResponse = JSON.parse(response); // Ensure response is valid JSON
    //   navigate("/roadmap", { state: { roadmapData: jsonResponse } });
    // } catch (error) {
    //   console.error("Error generating roadmap:", error);
    // }
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
          <div className="flex justify-end mt-4">
            <button
              onClick={handleStartLearning}
              className="bg-white text-black px-6 py-2 rounded-full font-medium flex items-center gap-2"
            >
              Start Learning
              <span>▶</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LearnPage = () => (
  <div className="flex min-h-screen">
    <Sidebar />
    <MainContent />
  </div>
);

export default LearnPage;

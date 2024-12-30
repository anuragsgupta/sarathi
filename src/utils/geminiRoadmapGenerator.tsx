import { GoogleGenerativeAI } from "@google/generative-ai";

interface Resource {
  type: string;
  title: string;
  url: string;
  description: string;
}

interface PracticeQuestion {
  question: string;
  difficulty: string;
  hints: string[];
  solution: string;
}

interface Module {
  name: string;
  description: string;
  duration: string;
  topics: string[];
  resources: Resource[];
  practiceQuestions: PracticeQuestion[];
}

interface Roadmap {
  title: string;
  description: string;
  prerequisites: string[];
  modules: Module[];
}

export const generateLearningRoadmap = async (prompt: string, apiKey: string): Promise<Roadmap> => {
  if (!apiKey) {
    throw new Error("API key is required");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const structuredPrompt = `
    Create a focused learning roadmap for: "${prompt}"
    
    Provide response in JSON format with exactly this structure, keeping descriptions concise:
    {
      "title": "Topic name",
      "description": "Brief 1-2 sentence overview",
      "prerequisites": ["max 3 prerequisites"],
      "modules": [
        {
          "name": "Module name",
          "description": "1 sentence description",
          "duration": "Estimated time",
          "topics": ["5-7 key topics"],
          "resources": [
            {
              "type": "video/article/tutorial",
              "title": "Resource name",
              "url": "URL",
              "description": "1 sentence description"
            }
          ],
          "practiceQuestions": [
            {
              "question": "Practice question",
              "difficulty": "beginner/intermediate/advanced",
              "hints": ["1-2 short hints"],
              "solution": "Brief solution"
            }
          ]
        }
      ]
    }

    Important: Keep all text fields concise and limit to 3-4 modules maximum.
    Return only the JSON object, no additional text or code blocks.`;

  try {
    const result = await model.generateContent(structuredPrompt);
    const response = await result.response;
    const text = await response.text();
    
    // Clean up the response text
    const cleanedText = text
      .replace(/```json/gi, '')
      .replace(/```/g, '')
      .trim();

    try {
      // Attempt to parse the cleaned JSON
      const parsedData: Roadmap = JSON.parse(cleanedText);
      
      // Validate essential structure
      if (!parsedData.title || !parsedData.modules || !Array.isArray(parsedData.modules)) {
        throw new Error("Invalid roadmap structure");
      }

      return parsedData;
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      throw new Error("Failed to parse roadmap data");
    }
  } catch (error) {
    console.error("Error generating roadmap:", error);
    throw error;
  }
};
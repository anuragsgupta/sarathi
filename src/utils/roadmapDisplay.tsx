import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { CheckCircle, Circle, ChevronDown, ChevronUp } from 'lucide-react';

interface Resource {
  type: string;
  title: string;
  url: string;
  description: string;
}

interface PracticeQuestion {
  question: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
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

interface Project {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  requirements: string[];
  steps: string[];
}

interface RoadmapData {
  title: string;
  description: string;
  prerequisites: string[];
  modules: Module[];
  projects?: Project[];
}

interface LocationState {
  roadmapData: RoadmapData;
}

const RoadmapDisplay: React.FC = () => {
  const location = useLocation();
  const [completedModules, setCompletedModules] = useState<Set<number>>(new Set());
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const state = location.state as LocationState | null;
  const roadmapData = state?.roadmapData;

  if (!roadmapData) {
    return <Navigate to="/sarathi/" replace />;
  }

  const toggleModuleCompletion = (moduleIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newCompleted = new Set(completedModules);
    if (newCompleted.has(moduleIndex)) {
      newCompleted.delete(moduleIndex);
    } else {
      newCompleted.add(moduleIndex);
    }
    setCompletedModules(newCompleted);
  };

  const toggleModule = (moduleIndex: number): void => {
    setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex);
  };

  const toggleQuestion = (questionId: string): void => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">{roadmapData.title}</h1>
        <p className="text-gray-600 mb-4">{roadmapData.description}</p>
        <div>
          <h3 className="text-xl font-semibold mb-2">Prerequisites</h3>
          <div className="flex flex-wrap gap-2">
            {roadmapData.prerequisites.map((prereq, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {prereq}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-4">
        {roadmapData.modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="bg-white rounded-lg shadow">
            {/* Module Header */}
            <button
              onClick={() => toggleModule(moduleIndex)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => toggleModuleCompletion(moduleIndex, e)}
                  className="flex items-center"
                >
                  {completedModules.has(moduleIndex) ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-300" />
                  )}
                </button>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{module.name}</h3>
                  <p className="text-sm text-gray-600">{module.duration}</p>
                </div>
              </div>
              {expandedModule === moduleIndex ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            {/* Module Content */}
            {expandedModule === moduleIndex && (
              <div className="p-4 border-t">
                <div className="space-y-6">
                  {/* Topics */}
                  <div>
                    <h4 className="font-semibold mb-2">Topics</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {module.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div>
                    <h4 className="font-semibold mb-2">Resources</h4>
                    <div className="space-y-2">
                      {module.resources.map((resource, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <h5 className="font-medium">{resource.title}</h5>
                          <p className="text-sm text-gray-600">{resource.description}</p>
                            <a href={resource.url}>
                          <span  className="inline-block mt-2 px-2 py-1 text-xs bg-gray-100 rounded-full">
                            {resource.type}

                          </span>
                            </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practice Questions */}
                  <div>
                    <h4 className="font-semibold mb-2">Practice Questions</h4>
                    <div className="space-y-2">
                      {module.practiceQuestions.map((question, index) => {
                        const questionId = `${moduleIndex}-${index}`;
                        return (
                          <div key={index} className="border rounded-lg">
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full text-left p-3 hover:bg-gray-50 flex justify-between items-center"
                            >
                              <div>
                                <p>{question.question}</p>
                                <span className="inline-block mt-1 px-2 py-1 text-xs bg-gray-100 rounded-full">
                                  {question.difficulty}
                                </span>
                              </div>
                              {expandedQuestions.has(questionId) ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
                              )}
                            </button>
                            {expandedQuestions.has(questionId) && (
                              <div className="p-3 border-t space-y-2">
                                <div>
                                  <h6 className="font-semibold">Hints:</h6>
                                  <ul className="list-disc pl-5">
                                    {question.hints.map((hint, hintIndex) => (
                                      <li key={hintIndex}>{hint}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h6 className="font-semibold">Solution:</h6>
                                  <p>{question.solution}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Projects Section */}
      {roadmapData.projects && roadmapData.projects.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="space-y-4">
            {roadmapData.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Requirements</h5>
                    <ul className="list-disc pl-5">
                      {project.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Implementation Steps</h5>
                    <ol className="list-decimal pl-5">
                      {project.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapDisplay;
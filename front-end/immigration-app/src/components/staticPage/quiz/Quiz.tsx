"use client";
import React, { SetStateAction, useState } from "react";
import { quizQuestions } from "./quizQuestions";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";
import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import QuizResult from "./QuizResult";
import passport from "@/assets/bg_passport.jpeg";
import gradStudents from "@/assets/bg_grad_students.jpeg";

export default function Quiz({ onClose }: { onClose: () => void }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [result, setResult] = useState<React.ReactNode>("");

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);
  };

  const goToNext = () => {
    if (!answers[currentQuestionIndex]) return;

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setIsQuizComplete(true);
      analyseAnswers(answers);
    }
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const analyseAnswers = (answers: string[]) => {
    let resultComponent;

    switch (true) {
      case answers[0] === "Immigrate" && answers[4] === "Yes":
        resultComponent = (
          <div className="text-center">
            <QuizResult
              title="Express Entry"
              image={passport}
              alt="Passports"
            />
          </div>
        );
        break;

      case answers[0] === "Study" && answers[1] === "Advanced":
        resultComponent = (
          <div>
            <QuizResult
              title="Post-Graduation Work Permit"
              image={gradStudents}
              alt="Passports"
            />
          </div>
        );
        break;

      default:
        resultComponent = (
          <div>
            <p className="flex justify-normal">
              Based on your answers, we recommend you to book a free
              consultation with our team to discuss your goals and options.
            </p>
            <FreeConsultationBtn />
          </div>
        );
        break;
    }

    setResult(resultComponent); // Store the entire component in the state
  };

  return (
    <div>
      {/* Close Button */}
      <div className="flex justify-end pb-4">
        <button className="text-gray-950 hover:text-black" onClick={onClose}>
          <IoMdClose size={24} />
        </button>
      </div>

      {isQuizComplete ? (
        <div>
          <h2 className="text-lg font-semibold">Quiz complete!</h2>
          <p>{result}</p>
        </div>
      ) : (
        <>
          {/* Step Indicator */}
          <div className="flex flex-col mb-4">
            <div className="text-gray-500 text-sm">
              Step {currentQuestionIndex + 1} of {quizQuestions.length}
            </div>
            <div className="flex items-center justify-between w-full p-2 relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 h-0.5 bg-primary-red z-0" />
              <div className="flex space-x-2 w-full justify-between p-2 items-center">
                {quizQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={`relative z-10 w-5 h-5 rounded-full text-sm flex items-center justify-center text-white ${
                      index <= currentQuestionIndex
                        ? "bg-red-600"
                        : "bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Question Section */}
          <div className="p-4">
            <h2 className="text-lg font-semibold">{currentQuestion.text}</h2>
            <div className="flex flex-wrap gap-4 items-center justify-center mt-2">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  className={`block w-36 text-center p-2 rounded-md border transition ${
                    answers[currentQuestionIndex] === option
                      ? "bg-red-600 text-white" // Active state
                      : "bg-white text-black border-red-600 border-2 hover:bg-red-100" // Default state
                  }`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-4">
            <Button
              onClick={goToPrevious}
              disabled={currentQuestionIndex === 0}
              className="bg-transparent text-black shadow-none hover:bg-transparent hover:text-secondary-blue"
            >
              <FaArrowLeft className="mr-2" />
              Back
            </Button>
            <Button
              onClick={goToNext}
              disabled={!answers[currentQuestionIndex]} // Disable if no answer
              className="bg-transparent text-secondary-blue shadow-none hover:bg-transparent hover:text-secondary-blue"
            >
              {currentQuestionIndex === quizQuestions.length - 1 ? (
                "Submit"
              ) : (
                <>
                  Next <FaArrowRight className="ml-2" />
                </>
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

import React, { useState } from "react";
import quizData from "../components/data/mostenirea.json"; 

const TestMostenirea = () => {
  const [answers, setAnswers] = useState(Array(quizData.questions.length).fill(null)); // pentru a ține evidența răspunsurilor
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionIndex, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData.questions[index].answer) {
        score++;
      }
    });
    setShowResult(true);
  };

  return (
    <div className="min-h-screen  text-white p-8 space-y-12">
      <h1 className="text-5xl font-serif text-white drop-shadow-lg text-center mb-12">Test despre moștenire</h1>

      {showResult ? (
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Rezultatul tău</h2>
          <p className="text-xl">
            Ai obținut {answers.filter((answer, index) => answer === quizData.questions[index].answer).length} din {quizData.questions.length} puncte!
          </p>
        </div>
      ) : (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto space-y-8">
          {quizData.questions.map((question, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-2xl font-medium">{question.question}</h2>
              <div className="space-y-4">
              {question.options.map((option, idx) => (
  <button
    key={idx}
    onClick={() => handleAnswer(index, option)}
    className={`w-full p-4 text-white rounded-md transition-all duration-300 ${
      answers[index] === option
        ? 'bg-blue-500 hover:bg-blue-400'
        : 'bg-gray-700 hover:bg-gray-600'
    }`}
  >
    {String.fromCharCode(97 + idx)}) {option} {/* Adaugă a), b), c), d) */}
  </button>
))}

              </div>
            </div>
          ))}
          <div className="text-center mt-8">
            <button
              onClick={handleSubmit}
              className="px-8 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-all duration-300"
            >
              Vezi Rezultatul
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestMostenirea;

import React, { useEffect, useState } from "react";
const Question = () => {
  //   const location = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
 const [Test, setTest] = useState(() => {
  const stored = localStorage.getItem("testQuestions");
  return stored ? JSON.parse(stored) : [];
});

  const currentQuestion = Test[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#282A35] text-white text-xl">
        Loading test data...
      </div>
    );
  }

  const correctAnswer = currentQuestion.answer;

  const handleSubmit = () => {
    if (!selectedOption) return; // Don't submit if no option is selected

    if (selectedOption === correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setShowExplanation(true);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setSelectedOption("");
    setShowExplanation(false);
    setIsSubmitted(false);

    if (currentQuestionIndex < Test.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      alert(`Quiz completed! Your score is: ${score}/${Test.length}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  const getOptionClass = (option) => {
    if (!isSubmitted) return "bg-[#9d9ea2] hover:bg-[#04AA6D]";
    if (option === correctAnswer) return "bg-green-500 text-white";
    if (option === selectedOption) return "bg-red-500 text-white";
    return "bg-[#9d9ea2]";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#282A35]">
      <div className="flex flex-col items-center justify-center w-full max-w-[60%] min-h-[50%] p-6 bg-[#88898e] rounded-lg shadow-md text-3xl font-bold">
        <div>
          <span className="mr-2">{currentQuestion.id}</span>
          <span>{currentQuestion.question}</span>
          <div className="flex flex-col mt-4 text-lg font-semibold">
            {currentQuestion.options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center mb-2 border p-2 rounded-lg ${getOptionClass(
                  option
                )} cursor-pointer`}
              >
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  disabled={isSubmitted}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {showExplanation && (
          <div className="mt-4 text-base bg-white p-4 rounded-lg text-black w-full">
            <strong>Explanation:</strong> {currentQuestion.explanation}
          </div>
        )}

        {!isSubmitted ? (
          <button
            className="text-xl font-normal mt-4 px-4 py-2 bg-[#04AA6D] text-white rounded-lg hover:bg-[#028A55]"
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Submit
          </button>
        ) : (
          <button
            className="text-xl font-normal mt-4 px-4 py-2 bg-[#04AA6D] text-white rounded-lg hover:bg-[#028A55]"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;

import { useState, useEffect } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    fetch("/MutipleMCQ.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      goToNextQuestion();
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (questions.length === 0) {
    return <p className="text-center text-lg font-semibold">Loading Quiz...</p>;
  }

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentIndex].answer) {
      setScore((score) => score + 1);
    }

    setTimeout(() => {
      goToNextQuestion();
    }, 1000);
  };

  const goToNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((currentIndex) => currentIndex + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-green-600">Quiz Completed! 🎉</h2>
          <p className="text-lg font-semibold mt-3">
            Your Final Score: <span className="text-blue-500">{score}</span> / {questions.length}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
          >
            Restart Quiz 🔄
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold text-gray-700">
          Question {currentIndex + 1} of {questions.length}
        </h2>
        <p className="text-2xl font-bold text-blue-600 mt-2">{currentQuestion.question}</p>

        <p className="mt-4 text-red-500 font-semibold">Time Left: {timeLeft}s</p>

        <div className="mt-4 space-y-3">
          {currentQuestion.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                selectedAnswer === index
                  ? index === currentQuestion.answer
                    ? "bg-green-300"
                    : "bg-red-300"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedAnswer === index}
                onChange={() => handleAnswerClick(index)}
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-lg font-medium">{option}</span>
            </label>
          ))}
        </div>

        <p className="mt-6 text-lg font-semibold">Score: {score}</p>
      </div>
    </div>
  );
};

export default Quiz;

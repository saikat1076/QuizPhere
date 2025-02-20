import { useEffect, useState } from "react";
import { saveQuizResult } from "../IndexedDB/IndexedDB";
import { useNavigate } from "react-router-dom";

const IntregerQuiz = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    fetch('/CQ.json')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setQuestions(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      goToNextQuestion();
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, currentIndex]);

  if (questions.length === 0) {
    return <p>Loading...</p>;
  }

  const handleAnswerSubmit = () => {
    if (parseInt(answer) === parseInt(currentQuestion.answer)) {
      setScore(score => score + 1);
    }
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex => currentIndex + 1);
      setAnswer('');
      setTimeLeft(30);
    } else {
      setQuizFinished(true);
      saveQuizResult(score, questions.length);
    }
  };

  // Logic to handle quiz restart
  const handleRestart = () => {
    setScore(0);
    setCurrentIndex(0);
    setAnswer('');
    setTimeLeft(30);
    setQuizFinished(false);
  };

  const currentQuestion = questions[currentIndex];

  if (quizFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-green-600">Quiz Completed! 🎉</h2>
          <p className="text-lg font-semibold mt-3">
            Your Final Score: <span className="text-blue-500">{score}</span> / {questions.length}
          </p>
          <button
            onClick={handleRestart} // Call handleRestart to reset the quiz state
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
          >
            Restart Quiz 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold text-gray-700">
          Question {currentIndex + 1} of {questions.length}
        </h2>
        <p className="text-2xl font-bold text-blue-600 mt-2">{currentQuestion.question}</p>

        <p className="mt-4 text-red-500 font-semibold">Time Left: {timeLeft}s</p>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Type answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAnswerSubmit}
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 w-full"
          >
            Submit Answer
          </button>
        </div>

        <p className="mt-6 text-lg font-semibold">Score: {score}</p>
      </div>
    </div>
  );
};

export default IntregerQuiz;

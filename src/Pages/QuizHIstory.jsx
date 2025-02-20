
import { useEffect, useState } from "react";
import { getQuizHistory, clearQuizHistory } from "../IndexedDB/IndexedDB";
import { NavLink } from "react-router-dom";

const QuizHistory = () => {
  const [quizHistory, setQuizHistory] = useState([]);

  useEffect(() => {
    getQuizHistory().then((history) => {
      console.log("Loaded History:", history); 
      setQuizHistory(history || []);
    });
  }, []);

  const handleClearHistory = () => {
    clearQuizHistory().then(() => setQuizHistory([]));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-blue-700">Quiz History 📜</h1>

        {quizHistory.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {quizHistory.map((entry, index) => (
              <li key={index} className="border p-3 rounded-lg shadow">
                <p><strong>Date:</strong> {new Date(entry.timestamp).toLocaleString()}</p>
                <p><strong>Score:</strong> {entry.finalScore}/{entry.totalQuestions}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-500">No quiz history available.</p>
        )}

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleClearHistory}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Clear History 🗑️
          </button>

          <NavLink
            to="/"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Home 🏠
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default QuizHistory;

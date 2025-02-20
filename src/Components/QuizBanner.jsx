import { NavLink } from "react-router-dom";

const QuizBanner = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-center px-6 pt-5">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-blue-900 leading-tight">
          QuizPhere makes learning exciting—where curiosity meets competition!
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          Unlock the power of knowledge with fun and interactive quizzes! 
          Test your skills, challenge friends, and rise to the top. 
          Discover new topics and expand your learning with every quiz!
        </p>

        {/* Search Bar */}
        <div className="mt-6 relative w-full md:w-3/4">
          <input
            type="text"
            placeholder="Search for quizzes..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
            🔍 Search
          </button>
        </div>

        {/* Key Features */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
          <div className="flex items-center space-x-2">
            <span className="text-blue-600 text-2xl">🎯</span>
            <p className="text-gray-800 font-semibold">1000+ Quizzes</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 text-2xl">🏆</span>
            <p className="text-gray-800 font-semibold">Compete & Win</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-600 text-2xl">📚</span>
            <p className="text-gray-800 font-semibold">Learn & Grow</p>
          </div>
        </div>

        {/* Buttons for MCQ & CQ Exam */}
        <div className="mt-6 flex space-x-4">
          <NavLink to='/mcq-exam' className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-all">📝 MCQ Exam</NavLink>
          <NavLink to='/cq-exam' className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-all"> 🖊️ CQ Exam</NavLink>
          
        </div>

      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://i.ibb.co/FL0pWHZD/IMG-20250219-WA0005.jpg"
          alt="Student"
          className="w-full h-auto rounded-xl"
        />
      </div>

    </div>
  );
};

export default QuizBanner;

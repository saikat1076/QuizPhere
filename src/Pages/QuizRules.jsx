const QuizRules = () => {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-4">📜 Quiz Rules & Instructions</h2>
        
        <div className="space-y-4 text-gray-700">
          {/* General Guidelines */}
          <div>
            <h3 className="text-xl font-semibold">✅ General Guidelines:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Read each question carefully before answering.</li>
              <li>You have <strong>30 minutes</strong> to complete the quiz.</li>
              <li>This quiz must be completed <strong>independently</strong>.</li>
            </ul>
          </div>
  
          {/* Answering Questions */}
          <div>
            <h3 className="text-xl font-semibold">📝 Answering Questions:</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Multiple-Choice Questions:</strong> Select the best answer (A, B, C, or D).</li>
              <li><strong>Integer-Type Questions:</strong> Enter only the numerical value (e.g., <code>42</code>).</li>
            </ul>
          </div>
  
          {/* Restrictions */}
          <div>
            <h3 className="text-xl font-semibold text-red-500">❌ Restrictions:</h3>
            <ul className="list-disc list-inside ml-4">
              <li><strong>No calculators</strong> unless explicitly allowed.</li>
              <li><strong>No internet searches</strong> or external resources.</li>
            </ul>
          </div>
  
          {/* Scoring & Submission */}
          <div>
            <h3 className="text-xl font-semibold text-green-600">🎯 Scoring & Submission:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Each correct answer earns points.</li>
              <li>Your final score will be displayed at the end.</li>
            </ul>
          </div>
  
          {/* Time Management Tip */}
          <p className="text-center text-gray-600 font-medium">
            ⏳ <strong>Tip:</strong> Manage your time wisely and double-check your answers before submitting!
          </p>
        </div>
      </div>
    );
  };
  
  export default QuizRules;
  
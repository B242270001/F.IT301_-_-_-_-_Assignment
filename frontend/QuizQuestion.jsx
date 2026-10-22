import React, { useEffect, useState } from 'react';

export default function QuizQuestion({ unitId = 'unit-101' }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetch(`/api/quiz/${unitId}`)
      .then(res => res.json())
      .then(data => setQuestions(data.data || []))
      .catch(err => console.error(err));
  }, [unitId]);

  if (questions.length === 0) return <div className="p-6">Асуулт ачаалж байна...</div>;

  const currentQ = questions[currentIndex];

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow mt-10">
      <div className="text-sm text-gray-500 mb-2">
        Асуулт {currentIndex + 1} / {questions.length}
      </div>
      <h2 className="text-xl font-bold mb-4">{currentQ.question}</h2>

      <div className="space-y-3">
        {currentQ.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedOption(idx)}
            className={`w-full text-left p-3 rounded border transition ${
              selectedOption === idx ? 'border-blue-600 bg-blue-50 font-medium' : 'hover:bg-gray-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(prev => prev - 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Өмнөх
        </button>
        <button
          onClick={() => {
            if (currentIndex < questions.length - 1) {
              setCurrentIndex(prev => prev + 1);
              setSelectedOption(null);
            } else {
              alert('Тест дууслаа!');
            }
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {currentIndex === questions.length - 1 ? 'Дуусгах' : 'Дараах'}
        </button>
      </div>
    </div>
  );
}

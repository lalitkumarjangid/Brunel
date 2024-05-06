import React, { useState } from 'react'

const AskQuestion = () => {
  const [showAnswers, setShowAnswers] = useState([false, false, false, false, false]);

  const questions = [
    "Do you offer freelancers?",
    "What’s the guarantee that I will be satisfied with the hired talent?",
    "Can I hire multiple talents at once?",
    "Why should I not go to an agency directly?",
    "Who can help me pick a right skillset and duration for me?"
  ];

  const toggleAnswer = index => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
    <div className="  rounded-lg bg-green-50 p-10 mt-5 flex items-start justify-between mb-10">
        <div className="flex flex-col">
  <h2 className=' ml-20  font-coveredByYourGrace text-xl text-[#9E9D9D];
'>What’s on your mind</h2>
  <h1 className="font-bold ml-16 mb-4 text-5xl w-96">AskQuestion</h1>
</div>
      <div className="flex-grow">
        {questions.map((question, index) => (
          <div key={index} className="mb-2">
            <button onClick={() => toggleAnswer(index)} className="flex justify-between items-center w-full p-2 rounded">
              <span>{question}</span>
              <span>{showAnswers[index] ? '-' : '+'}</span>
            </button>
            {showAnswers[index] && <p className="mt-2 text-slate-500">Answer for question {index + 1}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AskQuestion
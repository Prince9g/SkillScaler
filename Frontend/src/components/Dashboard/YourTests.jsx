import React from 'react'

function YourTests() {
  // Sample completed tests data
  const completedTests = [
    {
      id: 1,
      subject: "JavaScript",
      topic: "ES6 Features",
      difficulty: "Intermediate",
      totalQuestions: 20,
      correctAnswers: 16,
      score: 80,
      date: "2025-07-25",
      timeSpent: "35 min"
    },
    {
      id: 2,
      subject: "React",
      topic: "Hooks & State Management", 
      difficulty: "Advanced",
      totalQuestions: 15,
      correctAnswers: 11,
      score: 73,
      date: "2025-07-24",
      timeSpent: "42 min"
    },
    {
      id: 3,
      subject: "CSS",
      topic: "Flexbox & Grid",
      difficulty: "Beginner", 
      totalQuestions: 25,
      correctAnswers: 22,
      score: 88,
      date: "2025-07-23",
      timeSpent: "28 min"
    },
    {
      id: 4,
      subject: "Node.js",
      topic: "Express & Middleware",
      difficulty: "Intermediate",
      totalQuestions: 18,
      correctAnswers: 14,
      score: 78,
      date: "2025-07-22",
      timeSpent: "40 min"
    },
    {
      id: 5,
      subject: "Python",
      topic: "Data Structures",
      difficulty: "Advanced",
      totalQuestions: 22,
      correctAnswers: 18,
      score: 82,
      date: "2025-07-21",
      timeSpent: "45 min"
    },
    {
      id: 6,
      subject: "SQL",
      topic: "Database Queries",
      difficulty: "Beginner",
      totalQuestions: 16,
      correctAnswers: 15,
      score: 94,
      date: "2025-07-20",
      timeSpent: "30 min"
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner':
        return 'bg-emerald-100 text-emerald-800 border border-emerald-200'
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 border border-blue-200'
      case 'Advanced':
        return 'bg-slate-100 text-slate-800 border border-slate-200'
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200'
    }
  }

  return (
    <div className='bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen p-6 font-mono'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Header with total count */}
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent mb-2'>Your Tests</h1>
            <p className='text-slate-600'>Your completed test history</p>
          </div>
          <div className='bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg'>
            <div className='text-2xl font-bold'>{completedTests.length}</div>
            <div className='text-sm text-emerald-100'>Completed Tests</div>
          </div>
        </div>

        {/* Test Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
          {completedTests.map((test, index) => {
            const cardColors = [
              'from-emerald-50 to-blue-50 border-emerald-200 hover:border-emerald-400',
              'from-blue-50 to-slate-50 border-blue-200 hover:border-blue-400',
              'from-slate-50 to-emerald-50 border-slate-200 hover:border-slate-400',
              'from-green-50 to-blue-50 border-green-200 hover:border-green-400',
              'from-blue-50 to-green-50 border-blue-200 hover:border-blue-400',
              'from-gray-50 to-emerald-50 border-gray-200 hover:border-gray-400'
            ]
            const scoreColors = [
              'text-emerald-600',
              'text-blue-600', 
              'text-slate-600',
              'text-green-600',
              'text-blue-700',
              'text-gray-600'
            ]
            
            const cardColor = cardColors[index % cardColors.length]
            const scoreColor = scoreColors[index % scoreColors.length]
            
            return (
              <div key={test.id} className={`bg-gradient-to-br ${cardColor} border rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <div className='flex justify-between items-start mb-4'>
                  <div className='flex-1'>
                    <h3 className='font-bold text-slate-800 text-xl mb-2'>{test.subject}</h3>
                    <p className='text-slate-600 text-sm mb-3'>{test.topic}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(test.difficulty)}`}>
                      {test.difficulty}
                    </span>
                  </div>
                  <div className='text-right'>
                    <div className={`text-3xl font-bold ${scoreColor} mb-1`}>{test.score}%</div>
                    <div className='text-xs text-slate-500'>{test.date}</div>
                  </div>
                </div>
                
                <div className='grid grid-cols-3 gap-4 text-sm border-t border-slate-200 pt-4'>
                  <div className='text-center'>
                    <span className='text-slate-500 block text-xs mb-1'>Questions</span>
                    <div className='font-semibold text-slate-700'>{test.totalQuestions}</div>
                  </div>
                  <div className='text-center'>
                    <span className='text-slate-500 block text-xs mb-1'>Correct</span>
                    <div className='font-semibold text-slate-700'>{test.correctAnswers}</div>
                  </div>
                  <div className='text-center'>
                    <span className='text-slate-500 block text-xs mb-1'>Time</span>
                    <div className='font-semibold text-slate-700'>{test.timeSpent}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default YourTests
import React from 'react'

function Bottom() {
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
    }
  ]

  // Sample subject cards data
  const subjects = [
    { name: "JavaScript", totalTests: 12, avgScore: 78, color: "bg-yellow-100 text-yellow-800" },
    { name: "React", totalTests: 8, avgScore: 82, color: "bg-blue-100 text-blue-800" },
    { name: "CSS", totalTests: 15, avgScore: 85, color: "bg-purple-100 text-purple-800" },
    { name: "Node.js", totalTests: 6, avgScore: 71, color: "bg-green-100 text-green-800" },
  ]

  // Sample suggested tests
  const suggestedTests = [
    { subject: "Python", topic: "Data Structures", difficulty: "Intermediate", questions: 20 },
    { subject: "SQL", topic: "Advanced Queries", difficulty: "Advanced", questions: 15 },
    { subject: "MongoDB", topic: "Aggregation Pipeline", difficulty: "Intermediate", questions: 18 },
  ]

  // Performance data for last 7 days
  const dailyPerformance = [
    { day: "Mon", testsGiven: 2, avgScore: 78 },
    { day: "Tue", testsGiven: 1, avgScore: 85 },
    { day: "Wed", testsGiven: 3, avgScore: 72 },
    { day: "Thu", testsGiven: 2, avgScore: 88 },
    { day: "Fri", testsGiven: 1, avgScore: 91 },
    { day: "Sat", testsGiven: 2, avgScore: 79 },
    { day: "Sun", testsGiven: 1, avgScore: 10 },
  ]

  return (
    <>
    <div className='bg-zinc-100 min-h-screen p-6 font-mono'>
        <div className='flex gap-6 h-full'>
            {/* Left section - Test Cards and Subjects */}
            <div className='flex-1 space-y-6'>
              
              {/* Recent Test Results */}
              <div className='bg-white rounded-lg shadow-lg p-6'>
                <h2 className='text-2xl font-bold text-green-600 mb-4'>Recent Test Results</h2>
                <div className='space-y-4'>
                  {completedTests.map((test) => (
                    <div key={test.id} className='border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow'>
                      <div className='flex justify-between items-start mb-3'>
                        <div>
                          <h3 className='font-semibold text-green-700 text-lg'>{test.subject}</h3>
                          <p className='text-gray-600 text-sm'>{test.topic}</p>
                        </div>
                        <div className='text-right'>
                          <div className='text-2xl font-bold text-green-600'>{test.score}%</div>
                          <div className='text-xs text-gray-500'>{test.date}</div>
                        </div>
                      </div>
                      
                      <div className='grid grid-cols-3 gap-4 text-sm'>
                        <div>
                          <span className='text-gray-600'>Questions:</span>
                          <div className='font-medium text-green-700'>{test.totalQuestions}</div>
                        </div>
                        <div>
                          <span className='text-gray-600'>Correct:</span>
                          <div className='font-medium text-green-700'>{test.correctAnswers}</div>
                        </div>
                        <div>
                          <span className='text-gray-600'>Time:</span>
                          <div className='font-medium text-green-700'>{test.timeSpent}</div>
                        </div>
                      </div>
                      
                      <div className='mt-3'>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          test.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          test.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {test.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subject Performance */}
              <div className='bg-white rounded-lg shadow-lg p-6'>
                <h2 className='text-2xl font-bold text-green-600 mb-4'>Subject Performance</h2>
                <div className='grid grid-cols-2 gap-4'>
                  {subjects.map((subject) => (
                    <div key={subject.name} className='border border-green-200 rounded-lg p-4'>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${subject.color}`}>
                        {subject.name}
                      </div>
                      <div className='space-y-2'>
                        <div className='flex justify-between'>
                          <span className='text-gray-600 text-sm'>Tests Given:</span>
                          <span className='font-medium text-green-700'>{subject.totalTests}</span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-600 text-sm'>Avg Score:</span>
                          <span className='font-bold text-green-600'>{subject.avgScore}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Tests */}
              <div className='bg-white rounded-lg shadow-lg p-6'>
                <h2 className='text-2xl font-bold text-green-600 mb-4'>Suggested Tests</h2>
                <div className='space-y-3'>
                  {suggestedTests.map((test, index) => (
                    <div key={index} className='border border-green-200 rounded-lg p-4 hover:bg-green-50 transition-colors'>
                      <div className='flex justify-between items-center'>
                        <div>
                          <h3 className='font-semibold text-green-700'>{test.subject}</h3>
                          <p className='text-gray-600 text-sm'>{test.topic}</p>
                          <div className='flex gap-2 mt-2'>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              test.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                              test.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {test.difficulty}
                            </span>
                            <span className='px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800'>
                              {test.questions} Questions
                            </span>
                          </div>
                        </div>
                        <button className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium'>
                          Start Test
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right section - Performance Analytics */}
            <div className='flex-1 space-y-6'>
              
              {/* Overall Statistics */}
              <div className='bg-white rounded-lg shadow-lg p-6'>
                <h2 className='text-2xl font-bold text-green-600 mb-6'>Performance Overview</h2>
                
                <div className='grid grid-cols-2 gap-6 mb-6'>
                  <div className='bg-green-50 p-4 rounded-lg text-center'>
                    <div className='text-3xl font-bold text-green-600'>47</div>
                    <div className='text-sm text-green-700'>Total Tests</div>
                  </div>
                  <div className='bg-blue-50 p-4 rounded-lg text-center'>
                    <div className='text-3xl font-bold text-blue-600'>79%</div>
                    <div className='text-sm text-blue-700'>Average Score</div>
                  </div>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                  <div className='bg-yellow-50 p-3 rounded-lg text-center'>
                    <div className='text-xl font-bold text-yellow-600'>12</div>
                    <div className='text-xs text-yellow-700'>This Week</div>
                  </div>
                  <div className='bg-purple-50 p-3 rounded-lg text-center'>
                    <div className='text-xl font-bold text-purple-600'>45</div>
                    <div className='text-xs text-purple-700'>This Month</div>
                  </div>
                  <div className='bg-red-50 p-3 rounded-lg text-center'>
                    <div className='text-xl font-bold text-red-600'>3.2h</div>
                    <div className='text-xs text-red-700'>Study Time</div>
                  </div>
                </div>
              </div>

              {/* Daily Performance Chart */}
              <div className='bg-white rounded-lg shadow-lg p-6'>
                <h3 className='text-xl font-semibold text-green-600 mb-4'>Last 7 Days Performance</h3>
                <div className='space-y-4'>
                  {dailyPerformance.map((day) => (
                    <div key={day.day} className='flex items-center gap-4'>
                      <div className='w-12 text-sm font-medium text-gray-600'>{day.day}</div>
                      <div className='flex-1'>
                        <div className='flex justify-between items-center mb-1'>
                          <span className='text-sm text-gray-600'>{day.testsGiven} tests</span>
                          <span className='text-sm font-semibold text-green-600'>{day.avgScore}%</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-2'>
                          <div 
                            className='bg-green-500 h-2 rounded-full transition-all duration-300'
                            style={{ width: `${day.avgScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Difficulty Level Performance */}
              <div className='bg-white rounded-lg shadow-lg p-6'>
                <h3 className='text-xl font-semibold text-green-600 mb-4'>Performance by Difficulty</h3>
                <div className='space-y-4'>
                  <div className='bg-green-50 p-4 rounded-lg'>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-medium text-green-700'>Beginner</span>
                      <span className='text-green-600 font-semibold'>87%</span>
                    </div>
                    <div className='w-full bg-green-200 rounded-full h-3'>
                      <div className='bg-green-500 h-3 rounded-full' style={{ width: '87%' }}></div>
                    </div>
                    <div className='text-sm text-green-600 mt-1'>18 tests completed</div>
                  </div>
                  
                  <div className='bg-yellow-50 p-4 rounded-lg'>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-medium text-yellow-700'>Intermediate</span>
                      <span className='text-yellow-600 font-semibold'>74%</span>
                    </div>
                    <div className='w-full bg-yellow-200 rounded-full h-3'>
                      <div className='bg-yellow-500 h-3 rounded-full' style={{ width: '74%' }}></div>
                    </div>
                    <div className='text-sm text-yellow-600 mt-1'>22 tests completed</div>
                  </div>
                  
                  <div className='bg-red-50 p-4 rounded-lg'>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-medium text-red-700'>Advanced</span>
                      <span className='text-red-600 font-semibold'>65%</span>
                    </div>
                    <div className='w-full bg-red-200 rounded-full h-3'>
                      <div className='bg-red-500 h-3 rounded-full' style={{ width: '65%' }}></div>
                    </div>
                    <div className='text-sm text-red-600 mt-1'>7 tests completed</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Bottom
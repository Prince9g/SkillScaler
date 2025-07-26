import React from 'react'

function Performance() {
  // Previous test data
  const testHistory = [
    { id: 1, subject: "JavaScript", score: 80, date: "Jul 25" },
    { id: 2, subject: "React", score: 73, date: "Jul 24" },
    { id: 3, subject: "CSS", score: 88, date: "Jul 23" },
    { id: 4, subject: "Node.js", score: 78, date: "Jul 22" },
    { id: 5, subject: "Python", score: 82, date: "Jul 21" },
    { id: 6, subject: "SQL", score: 94, date: "Jul 20" },
    { id: 7, subject: "MongoDB", score: 76, date: "Jul 19" },
    { id: 8, subject: "Express", score: 85, date: "Jul 18" },
    { id: 9, subject: "Vue.js", score: 71, date: "Jul 17" },
    { id: 10, subject: "TypeScript", score: 89, date: "Jul 16" }
  ]

  const maxScore = Math.max(...testHistory.map(test => test.score))

  return (
    <div className='bg-gradient-to-br from-gray-100 via-blue-100 to-gray-100 min-h-screen p-8'>
      <div className='max-w-6xl mx-auto'>
        
        {/* Header */}
        <div className='mb-12 text-center'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>Test Performance Graph</h1>
          <p className='text-gray-600'>Your recent coding test scores over time</p>
        </div>

        {/* Graph Container */}
        <div className='bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded-2xl p-8 border border-gray-700 shadow-2xl'>
          
          {/* Graph Title */}
          <div className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-2'>Score Progression</h2>
            <p className='text-gray-400 text-sm'>Last 10 completed tests</p>
          </div>

          {/* Graph */}
          <div className='relative'>
            
            {/* Y-axis labels */}
            <div className='absolute left-0 top-0 h-80 flex flex-col justify-between text-gray-400 text-sm'>
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>

            {/* Graph area */}
            <div className='ml-12 relative'>
              
              {/* Grid lines */}
              <div className='absolute inset-0 flex flex-col justify-between'>
                {[0, 25, 50, 75, 100].map((line) => (
                  <div key={line} className='border-t border-gray-600 opacity-30'></div>
                ))}
              </div>

              {/* Bars */}
              <div className='flex items-end justify-between h-80 gap-2 relative z-10'>
                {testHistory.map((test, index) => (
                  <div key={test.id} className='flex-1 flex flex-col items-center group'>
                    
                    {/* Bar */}
                    <div className='flex-1 flex items-end mb-4 w-full'>
                      <div 
                        className='w-full bg-gradient-to-t from-cyan-400 to-blue-300 rounded-t-lg transition-all duration-500 hover:from-cyan-300 hover:to-blue-200 shadow-lg relative'
                        style={{ 
                          height: `${(test.score / 100) * 280}px`
                        }}
                      >
                        {/* Score label on hover */}
                        <div className='absolute -top-8 left-1/2 bg-white text-gray-800 px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200'
                             style={{ transform: 'translateX(-50%)' }}>
                          {test.score}%
                        </div>
                      </div>
                    </div>
                    
                    {/* Subject label */}
                    <div className='text-gray-300 text-xs font-medium text-center mb-1'>
                      {test.subject}
                    </div>
                    
                    {/* Date */}
                    <div className='text-gray-500 text-xs'>
                      {test.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* X-axis line */}
            <div className='ml-12 border-b border-gray-600 mt-2'></div>
          </div>

          {/* Graph Stats */}
          <div className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div className='bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg'>
              <div className='text-cyan-400 text-2xl font-bold'>{testHistory.length}</div>
              <div className='text-gray-300 text-sm'>Total Tests</div>
            </div>
            <div className='bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg'>
              <div className='text-blue-400 text-2xl font-bold'>{Math.round(testHistory.reduce((sum, test) => sum + test.score, 0) / testHistory.length)}%</div>
              <div className='text-gray-300 text-sm'>Average Score</div>
            </div>
            <div className='bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg'>
              <div className='text-green-400 text-2xl font-bold'>{maxScore}%</div>
              <div className='text-gray-300 text-sm'>Highest Score</div>
            </div>
            <div className='bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg'>
              <div className='text-purple-400 text-2xl font-bold'>{testHistory[testHistory.length - 1].score}%</div>
              <div className='text-gray-300 text-sm'>Latest Score</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className='mt-8 text-center'>
          <p className='text-gray-400 text-sm'>
            Hover over bars to see exact scores • Scores are based on your recent test completions
          </p>
        </div>
      </div>
    </div>
  )
}

export default Performance
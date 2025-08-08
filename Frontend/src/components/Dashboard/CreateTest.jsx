import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'

const CreateTest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        topic: '',
        numberOfQuestions: 10,
        difficulty: 'Intermediate'
    })

    // Set the app element for accessibility when component mounts
    useEffect(() => {
        Modal.setAppElement('#root')
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCreateTest = () => {
        console.log('Creating test with:', formData)
        // Add your test creation logic here
        setIsModalOpen(false)
        // Reset form
        setFormData({
            topic: '',
            numberOfQuestions: 10,
            difficulty: 'Intermediate'
        })
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    // Custom styles for react-modal
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)', // Safari support
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
        },
        content: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            border: 'none',
            background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%)',
            borderRadius: '1rem',
            padding: '0',
            maxWidth: '28rem',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'visible',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            margin: '0',
            outline: 'none'
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center p-4">
            {/* Demo content with button to open modal */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-8">Test Creation System</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold text-lg shadow-lg"
                >
                    Create New Test
                </button>
                <p className="mt-4 text-sm text-gray-600">Using React-Modal Implementation</p>
            </div>

            {/* React Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Create Test Modal"
                closeTimeoutMS={300}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
            >
                <div className="relative p-8">
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Modal Header */}
                    <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-green-600 mb-2">Create New Test</h2>
                        <p className="text-gray-600 text-sm">Set up your test parameters</p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-6">
                        {/* Topic Input */}
                        <div>
                            <label className="block text-sm font-semibold text-green-700 mb-2">
                                Test Topic
                            </label>
                            <input
                                type="text"
                                name="topic"
                                value={formData.topic}
                                onChange={handleInputChange}
                                placeholder="e.g., JavaScript Fundamentals"
                                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                                autoFocus
                            />
                        </div>

                        {/* Number of Questions */}
                        <div>
                            <label className="block text-sm font-semibold text-green-700 mb-2">
                                Number of Questions
                            </label>
                            <select
                                name="numberOfQuestions"
                                value={formData.numberOfQuestions}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                            >
                                <option value={5}>5 Questions</option>
                                <option value={10}>10 Questions</option>
                                <option value={15}>15 Questions</option>
                                <option value={20}>20 Questions</option>
                                <option value={25}>25 Questions</option>
                                <option value={30}>30 Questions</option>
                            </select>
                        </div>

                        {/* Difficulty Level */}
                        <div>
                            <label className="block text-sm font-semibold text-green-700 mb-3">
                                Difficulty Level
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                                    <label
                                        key={level}
                                        className={`cursor-pointer rounded-lg border-2 p-3 text-center text-sm font-medium transition-all duration-200 ${
                                            formData.difficulty === level
                                                ? 'border-green-500 bg-green-50 text-green-700'
                                                : 'border-gray-200 bg-white/60 text-gray-600 hover:border-green-300 hover:bg-green-50'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="difficulty"
                                            value={level}
                                            checked={formData.difficulty === level}
                                            onChange={handleInputChange}
                                            className="sr-only"
                                        />
                                        <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${
                                            level === 'Beginner' ? 'bg-green-400' :
                                            level === 'Intermediate' ? 'bg-yellow-400' :
                                            'bg-red-400'
                                        }`}></div>
                                        {level}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={closeModal}
                            className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleCreateTest}
                            disabled={!formData.topic.trim()}
                            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                                formData.topic.trim()
                                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            Create Test
                        </button>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20 blur-xl pointer-events-none"></div>
                    <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-20 blur-xl pointer-events-none"></div>
                </div>
            </Modal>
        </div>
    )
}

export default CreateTest
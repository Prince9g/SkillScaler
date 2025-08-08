import mongoose from 'mongoose';
const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    answer: { type: String, required: true },
    explanation: { type: String, required: true },
    selectedOption: { type: String }, 
    isCorrect: { type: Boolean, default: false } 
});

// Define schema for the whole test
const testSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    totalScore: { type: Number, default: 0 },
    achievedScore: { type: Number, default: 0 },
    questions: [questionSchema],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Test = mongoose.model('Test', testSchema);

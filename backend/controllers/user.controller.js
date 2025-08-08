import { User } from "../models/user.model.js";
import { Test } from "../models/test.model.js";

export const createUser = async (req, res)=>{
    const { username, email, password } = req.body;

    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", success:true, user:newUser});
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
}

export const loginUser = async (req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.find({ email, password });
        if(user){
            res.status(200).json({ message: "Login successful", success: true, username: user.username});
        }
    }catch(error){
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
}

export const createTest = async (req, res) => {
    const { title, description, questions, totalScore, achievedScore } = req.body;
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        const newTest = new Test({
            title,
            description,
            questions,
            totalScore: totalScore,
            achievedScore: achievedScore,
            user: userId
        });

        await newTest.save();
        user.Tests.push(newTest._id);
        await user.save();

        res.status(201).json({ message: "Test created successfully", success: true, test: newTest });
    } catch (error) {
        res.status(500).json({ message: "Error creating test", error: error.message });
    }
}


export const getUserTests = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId).populate('Tests');
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        res.status(200).json({ message: "User tests retrieved successfully", success: true, tests: user.Tests });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving user tests", error: error.message });
    }
}

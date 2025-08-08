import express from 'express';
import { connectDB } from './db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import testRoutes from './routes/test.route.js';
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRoutes);
app.use('/api/test', testRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})
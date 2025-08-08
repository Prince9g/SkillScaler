import express from 'express';
import { createTest, getUserTests } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/create/:userId', createTest);
router.get('/get-tests/:userId', getUserTests);

export default router;
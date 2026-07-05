import express from 'express';
import { getSubject } from '../controllers/subjectController.js';

const router = express.Router();

router.get('/subject', getSubject);

export default router;
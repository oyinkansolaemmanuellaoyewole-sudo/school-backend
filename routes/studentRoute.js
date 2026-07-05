import express from 'express';
import { getStudents, createStudent, editStudent, deleteStudent } from '../controllers/studentController.js';

const router = express.Router();

router.get('/students', getStudents);
router.post('/create-student', createStudent);
router.put('/edit-student', editStudent);
router.delete('/delete-student', deleteStudent);


export default router;



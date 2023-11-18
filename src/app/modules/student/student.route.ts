import express from 'express';
import { studentController } from './student.contoller';

const router = express.Router();

// will call controller function

router.post('/create-student', studentController.createStudent);

router.get('/', studentController.getAllStudents);
router.get('/:studentId', studentController.getSingleStudents);

export const studentRoute = router;

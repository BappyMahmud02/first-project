import express from 'express';
import { studentController } from './student.contoller';

const router = express.Router();

// will call controller function


router.get('/', studentController.getAllStudents);
router.get('/:studentId', studentController.getSingleStudents);

export const studentRoute = router;

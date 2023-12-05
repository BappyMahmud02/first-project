import express from 'express';
import { studentController } from './student.contoller';
import validateRequest from '../../middlewares/validRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

// will call controller function

router.get('/', studentController.getAllStudents);

router.get('/:studentId', studentController.getSingleStudents);

router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  studentController.updateStudent,
);

router.delete('/:studentId', studentController.deleteStudent);

export const studentRoute = router;

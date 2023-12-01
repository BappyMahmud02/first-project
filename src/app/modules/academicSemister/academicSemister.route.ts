import express from 'express';
import validateRequest from '../../middlewares/validRequest';
import { AcademicSemisterControllers } from './academicSemister.controller';
import { AcademicSemisterValidation } from './academicSemisterValidation.semister';

const router = express.Router();

// will call controller function

router.post('/create-academic-semister', validateRequest(AcademicSemisterValidation.createAcademicSemisterValidationSchema), AcademicSemisterControllers.createAcademicSemister)

router.get('/:semisterId', AcademicSemisterControllers.getSingleAcademicSemister)

router.patch('/:semisterId', validateRequest(AcademicSemisterValidation.updateAcademicSemisterValidationSchema), AcademicSemisterControllers.updateAcademicSemister)

router.get('/' ,AcademicSemisterControllers.getAllAcademicSemister)



export const AcademicSemisterRoute = router;

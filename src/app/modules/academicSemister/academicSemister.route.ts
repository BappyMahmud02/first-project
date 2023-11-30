import express from 'express';
import validateRequest from '../../middlewares/validRequest';
import { AcademisSemisterValidation } from './academicSemisterValidation.semister';
import { AcademicSemisterControllers } from './AcademicSemister.controller';


const router = express.Router();

// will call controller function

router.post('/create-academic-semister', validateRequest(AcademisSemisterValidation.createAcademicSemisterValidationSchema), AcademicSemisterControllers.createAcademicSemister)



export const AcademicSemisterRoute = router;

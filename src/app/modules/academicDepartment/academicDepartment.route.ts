import express from 'express'
import validateRequest from '../../middlewares/validRequest'
import { AcademicDepartmentValidation } from './academicDepartment.validation'
import { AcademicDepartmentController } from './academicDepartment.controller'

const router = express.Router()


router.post('/create-academic-department', /*validateRequest(AcademicDepartmentValidation.createAcademicDepartmentValidationSchema),*/ AcademicDepartmentController.createAcademicDepartment);

router.get('/', AcademicDepartmentController.getAllAcademicDepartment)

router.get('/:departmentId', AcademicDepartmentController.getSingleAcademicDepartment)

router.patch('/:departmentId', validateRequest(AcademicDepartmentValidation.UpdateAcademicDepartmentValidationSchema),AcademicDepartmentController.updateAcademicDepartment)


export const AcademicDepartmentRoute = router ;
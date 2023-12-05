import {Router} from 'express'
import { studentRoute } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemisterRoute } from '../modules/academicSemister/academicSemister.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.route';

const router = Router();

const moduleRoutes = [
    {
        path : '/students',
        route : studentRoute,
    },
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/academic-semister',
        route: AcademicSemisterRoute,
    },
    {
        path: '/academic-faculties',
        route: AcademicFacultyRoutes,
    },
    {
        path: '/academic-departments',
        route: AcademicDepartmentRoute,
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;
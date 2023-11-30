import {Router} from 'express'
import { studentRoute } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemisterRoute } from '../modules/academicSemister/academicSemister.route';

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
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;
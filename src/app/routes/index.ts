import {Router} from 'express'
import { studentRoute } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
    {
        path : '/students',
        route : UserRoutes,
    },
    {
        path: '/users',
        route: studentRoute,
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;
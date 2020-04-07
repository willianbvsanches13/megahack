import { Router } from 'express';

// import Multer from 'multer';
import asyncHandler from 'express-async-handler';
import UserController from '~/app/controllers/User';
import JobController from '~/app/controllers/Job';
import SessionController from '~/app/controllers/Session';
import authMiddleware from '~/app/middlewares/auth';
// import MulterConfig from '~/app/config/multer';

const routes = Router();

/**
 * Session
 */

 routes.post('/session', asyncHandler(SessionController.store))

/**
 * User
 */
routes.post('/users', asyncHandler(UserController.store));

routes.use(authMiddleware);

routes.get('/users', asyncHandler(UserController.index));
routes.get('/users/:id', asyncHandler(UserController.show));
routes.put('/users/:id', asyncHandler(UserController.update));
routes.delete('/users/:id', asyncHandler(UserController.delete));

/**
 * Job
 */

routes.get('/jobs', asyncHandler(JobController.index));
routes.get('/jobs/:id', asyncHandler(JobController.show));
routes.post('/jobs', asyncHandler(JobController.store));
routes.put('/jobs/:id', asyncHandler(JobController.update));
routes.delete('/jobs/:id', asyncHandler(JobController.delete));

export default routes;

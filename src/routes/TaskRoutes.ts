import { Router } from 'express';
import { getTasks, createTask } from '../controllers/TaskController';

const router = Router();

router.get('/tasks', getTasks);
router.post('/newtask', createTask);

export default router;
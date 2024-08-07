import { Router } from 'express'
import {
  ctrlCreateNewTask,
  ctrlDeleteTask,
  ctrlGetAllTasks,
  ctrlGetTaskById,
  ctrlUpdateTask
} from '../controllers/task.controller.js'

const taskRouter = Router()

taskRouter.get('/', ctrlGetAllTasks)
taskRouter.post('/', ctrlCreateNewTask)

taskRouter.get('/:id', ctrlGetTaskById)
taskRouter.put('/:id', ctrlUpdateTask)
taskRouter.delete('/:id', ctrlDeleteTask)

export { taskRouter }

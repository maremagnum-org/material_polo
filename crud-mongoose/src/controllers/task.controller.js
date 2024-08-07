import { TaskModel } from '../models/Task.model.js'

export const ctrlCreateNewTask = async (req, res) => {
  const { content } = req.body

  try {
    const newTask = new TaskModel({ content })

    await newTask.save()

    res.status(201).json(newTask)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something goes wrong' })
  }
}

export const ctrlGetAllTasks = async (req, res) => {
  try {
    const allTasks = await TaskModel.find()

    res.status(200).json(allTasks)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something goes wrong' })
  }
}

export const ctrlGetTaskById = async (req, res) => {
  const taskId = req.params.id

  try {
    const task = await TaskModel.findById(taskId)

    if (!task) {
      return res.sendStatus(403)
    }

    res.status(200).json(task)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something goes wrong' })
  }
}

export const ctrlUpdateTask = async (req, res) => {
  const taskId = req.params.id
  const { content, done } = req.body

  try {
    await TaskModel.findByIdAndUpdate(taskId, { content, done })

    res.sendStatus(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something goes wrong' })
  }
}

export const ctrlDeleteTask = async (req, res) => {
  const taskId = req.params.id

  try {
    await TaskModel.findByIdAndDelete(taskId)
    res.sendStatus(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something goes wrong' })
  }
}

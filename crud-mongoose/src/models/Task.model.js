import { model, Schema } from 'mongoose'

const Task = new Schema({
  content: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const TaskModel = model('Task', Task)

export { TaskModel }

import { model, Schema } from 'mongoose'

const User = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  // vinculamos el modelo de tareas con el de usuario
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }]
})

const Task = new Schema({
  content: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
})

const UserModel = model('User', User)
const TaskModel = model('Task', Task)

export { UserModel, TaskModel }

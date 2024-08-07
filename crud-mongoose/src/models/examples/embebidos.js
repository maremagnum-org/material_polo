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
  // generamos un arreglo de objetos que contienen las tareas
  tasks: [{
    content: {
      type: String
    },
    done: {
      type: Boolean,
      default: false
    }
  }]
})

const UserModel = model('User', User)

export { UserModel }

import 'dotenv/config'
import express from 'express'
import { connectToMongo } from './database.js'

import { taskRouter } from './routes/task.routes.js'

const app = express()

app.use(express.json())

app.use('/api/tasks', taskRouter)

app.listen(process.env.PORT, () => {
  connectToMongo()
  console.log('server on port', process.env.PORT)
})

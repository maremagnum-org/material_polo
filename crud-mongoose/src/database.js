import { connect } from 'mongoose'

export function connectToMongo () {
  connect(process.env.MONGO_URI)
    .then(db => console.log(`DB is connected to ${db.connection.db.databaseName}`))
    .catch(err => console.log(err))
}

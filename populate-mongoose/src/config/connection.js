import mongoose from "mongoose";


export const connectMongoDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/database_prueba')
        console.log('Conexion establecida correctamente')
    } catch (error) {
        console.error(`error al conectarse a la base de datos: ${error.message}`)
    }
}
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';


import { Server as SocketServer } from 'socket.io';
import { createServer } from 'http';
import { fileURLToPath } from 'url';

import 'dotenv/config';

// Variables de entorno
import { env } from './config/config.js';

import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/mensaje.routes.js';
import { validarJWTWebsocket } from './middlewares/validar-jwt.js';
import { listarUsuarios, mensajePersonal, usuarioConectado, usuarioDesconectado } from './controllers/sockets.controllers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const httpServer = createServer(app);
const io = new SocketServer(httpServer);

mongoose.connect(env.URI)
.then(() => console.log('Base de datos online'))
.catch((error) => {
    console.log(error);
    throw new Error('Error al iniciar la base de datos');
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/mensaje', messageRoutes);


// Websocket events
io.on('connection', async (socket) => {
    const [isValid, uid ] = validarJWTWebsocket(socket.handshake.query['authorization']);


    if(!isValid){
        socket.disconnect();
        return console.log('Cliente no identificado', uid);
    }

    await usuarioConectado(uid);
    
    // Se une al usuario a una sala de socket.io
    socket.join(uid);
    
    // Agregar el usuario conectado a la lista de usuarios
    io.emit('list-users', await listarUsuarios());

    // Escuchar cuando el cliente envia un mensaje
    socket.on('mensaje-personal', async (payload) =>{
        console.log(payload);
        const msg = await mensajePersonal(payload);
        io.to(payload.to).emit('mensaje-personal', msg);
    })

    socket.on('new-message', (data) => {
        console.log(data);
        io.emit('new-message', data);
    });

    socket.on('disconnect', async () => {
        const user = await usuarioDesconectado(uid);
        io.emit('list-users', await listarUsuarios());
        console.log('Usuario desconectado:', user.username);
    });
});


httpServer.listen(env.PORT, () =>  console.log(`Server is running on http://localhost:${env.PORT}`));
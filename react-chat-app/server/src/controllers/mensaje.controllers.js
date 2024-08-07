import Message from "../models/Message.js"

export const obtenerMensajes = async (req, res) => {
    const mensajes = await Message.find().sort({ createdAt: 'desc' }).limit(30);
    return res.json({
        mensajes
    })
}
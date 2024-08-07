import Message from "../models/Message.js";
import User from "../models/User.js"

export const usuarioConectado = async (uid) => {
    const user = User.findByIdAndUpdate(uid, { online: true});
    return user;
}

export const usuarioDesconectado = async (uid ) => {
    const user = await User.findByIdAndUpdate(uid, { online: false });
    return user;
}

export const listarUsuarios = async () => {
    const users = await User.find().sort('-online');
    return users;
}

export const mensajePersonal = async (payload) => {
    const { from, to, message } = payload;

    const newMessage = new Message({ from, to, message });
    const msg = await newMessage.save();

    return msg;
}
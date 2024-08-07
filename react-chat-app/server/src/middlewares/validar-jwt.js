import jwt from 'jsonwebtoken';
import { env } from '../config/config.js';

export const validarJWT = (req, res, next) => {

    // Leer el token
    const token = req.headers('Authorization');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición',
        });
    }

    try {

        const { uid } = jwt.verify(token, env.JWT_ACCESS_SECRET);
        req.uid = uid;

        next();

    } catch (error) {

        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido',
        });

    }


};


export const validarJWTWebsocket = (token) => {

    try {
        const { uid } = jwt.verify(token, env.JWT_ACCESS_SECRET);
       
        if(uid) {
            return [ true, uid ]
        }
    } catch (error) {
        console.log(error);
        return [ false, null ]
    }

}
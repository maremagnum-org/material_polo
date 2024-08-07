import jwt from 'jsonwebtoken';
import { env } from '../config/config.js';


export const generarJWT = (uid) => {

    return new Promise((resolve, reject) => {

        const payload = { uid };

        jwt.sign(payload, env.JWT_ACCESS_SECRET, {
            expiresIn: '4h'
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve(token);
            }

        });

    });

};
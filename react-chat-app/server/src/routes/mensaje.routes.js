import { Router } from "express";
import { obtenerMensajes } from "../controllers/mensaje.controllers.js";

const router = Router();

router.get('/', obtenerMensajes)


export default router;
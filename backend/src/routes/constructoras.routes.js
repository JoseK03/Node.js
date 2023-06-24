import { Router } from "express";
import { methodHTTP as contructoraController} from "../controllers/constructuras.controllers.js";

const router = Router();
router.get("/api/constructuras", respuesta);


export default router;
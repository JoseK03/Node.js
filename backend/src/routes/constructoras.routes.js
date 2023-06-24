import {Router} from "express";
import {methodHTTP as constructoraController} from "../controllers/constructuras.controllers.js";

const router = Router();
router.get("/", constructoraController.getConstructora);


export default router;
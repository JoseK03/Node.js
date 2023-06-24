import { Router } from "express";
import { methodHTTP as cotizacionesController } from "../controllers/cotizaciones.controllers";

const router = Router();
router.get("/", cotizacionesController.getCotizacion);

export default router;
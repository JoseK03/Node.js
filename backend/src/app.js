import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js"

const app = express();

app.set("port", 5500);

app.use(categoriasRoutes);

export default app;
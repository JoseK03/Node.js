import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js"

const app = express();

app.set("port", 5502);

app.use("/api/categoria",categoriasRoutes);

export default app;
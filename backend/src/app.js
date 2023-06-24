import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js"

const app = express();

app.set("port", 5005);

app.use("/api/categoria",categoriasRoutes);

export default app;
import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import constructorasRoutes from "./routes/constructoras.routes.js";

const app = express();

app.set("port", 5005);

app.use("/api/categorias",categoriasRoutes);
app.use("/api/constructoras", constructorasRoutes);

export default app;
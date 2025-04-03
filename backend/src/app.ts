import express from "express";
import cors from "cors";
import recipeRoutes from "./infrastructure/webserver/express/routes/recipeRoutes";

const app = express();
app.use(cors());
app.use(express.json());

// Префікс API
app.use("/api/recipes", recipeRoutes);

export default app;

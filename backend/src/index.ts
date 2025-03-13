import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recipeRouter from "./routes/recipe.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());
app.use("/api/recipes", recipeRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

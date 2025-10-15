import express from "express";
import cors from "cors";
import userRoutes from "./routes/UserRoutes";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`🚀 Server running at http://127.0.0.1:${PORT}`);
});
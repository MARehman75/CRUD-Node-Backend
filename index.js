import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import topicsRoutes from "./routes/topics.js";
import cors from "cors"

dotenv.config();
const app = express();

connectDB();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.use("/api/topics", topicsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
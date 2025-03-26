import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Database } from "./config/database";
import estoqueRouter from "./routes/estoqueRoutes";
import uploadRouter from "./routes/uploadRoutes";
import usersRouter from "./routes/usersRoutes";

//verificar o motivo de dar erro ao trazer a variavel de .env

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(estoqueRouter);
app.use("/upload", uploadRouter);
app.use("/users", usersRouter);
app.use("uploads", express.static("uploads"));

const startServer = async () => {
    await Database.getInstance().connect();
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
}

startServer();


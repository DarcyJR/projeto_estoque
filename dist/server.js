"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const routes_1 = __importDefault(require("../src/routes/routes"));
const app = (0, express_1.default)();
const PORT = 5000; //verificar o motivo de dar erro ao trazer a variavel de .env
/*app.use(cors({
    origin: `http://localhost:3000`, // Permite somente requisições desse endereço
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"]
}))*/
app.use(express_1.default.json());
app.use(routes_1.default);
(0, database_1.Database)().then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

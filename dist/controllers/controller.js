"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProdutos = exports.getProdutos = void 0;
const ProdutoModel_1 = __importDefault(require("../models/ProdutoModel"));
const getProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produto = yield ProdutoModel_1.default.find();
        res.json(produto);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar produtos" });
    }
});
exports.getProdutos = getProdutos;
const createProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { produto, quantidade, tamanho } = req.body;
        const newProduto = new ProdutoModel_1.default({ produto, quantidade, tamanho });
        yield newProduto.save();
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar produto" });
    }
});
exports.createProdutos = createProdutos;

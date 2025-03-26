"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
const router = (0, express_1.Router)();
router.get("/estoque", controller_1.getProdutos);
router.post("/estoque", controller_1.createProdutos);
exports.default = router;

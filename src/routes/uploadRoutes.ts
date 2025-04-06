import { Router, Request, Response } from "express";

import {postImage, upload } from "../middleware/multer/multer";

const uploadRouter = Router();

// Criando a rota de upload
uploadRouter.post("/", upload.single("image"), postImage);

export default uploadRouter;

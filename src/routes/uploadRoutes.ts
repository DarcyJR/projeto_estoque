import { Router, Request, Response } from "express";

import { getAll, postImage, upload } from "../middleware/multer/multer";

const uploadRouter = Router();

uploadRouter.get("/", getAll);

// Criando a rota de upload
uploadRouter.post("/", upload.single("image"), postImage);

export default uploadRouter;

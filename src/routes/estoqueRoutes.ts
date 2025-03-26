import { Router } from "express";
import { ProductController } from "../controllers/ProdutoController";
//import { postImage } from "../controllers/UploadsController";
//import multer from "multer";

const estoqueRouter = Router();
//const upload = multer();

const productoController = new ProductController();

estoqueRouter.get("/estoque", productoController.getAll);
estoqueRouter.post("/estoque", productoController.create);
estoqueRouter.put("/estoque/:id", productoController.update);
estoqueRouter.delete("/estoque/:id", productoController.delete);

//router.post("/upload", upload.single("image"), postImage);

export default estoqueRouter;
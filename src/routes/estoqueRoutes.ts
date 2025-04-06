import { Router } from "express";
import { ProductController } from "../controllers/ProdutoController";
import { renameImage, upload } from "../middleware/multer/multer";

const estoqueRouter = Router();

const productoController = new ProductController();

estoqueRouter.get("/estoque", productoController.getAll);
estoqueRouter.post("/estoque", upload.single("image"), renameImage, productoController.create);
estoqueRouter.put("/estoque/:id", productoController.update);
estoqueRouter.delete("/estoque/:id", productoController.delete);

//router.post("/upload", upload.single("image"), postImage);

export default estoqueRouter;
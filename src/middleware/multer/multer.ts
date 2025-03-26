import { Request, Response } from "express"
import multer, { StorageEngine } from "multer";
import path from "path";

export const getAll = (req:Request, res: Response) => {
    res.send("Olá upload teste");
}

// Configuração do Multer
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Pasta onde os arquivos serão salvos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage,
  /*fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Apenas imagens são permitidas!"));
    }
    cb(null, true);
  },*/
});

export const postImage = (req: Request, res: Response): void => {
  if (!req.file) {
    res.status(400).json({ message: "Nenhuma imagem foi enviada." });
    return;
  }

  res.json({
    message: "Imagem enviada com sucesso!",
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
}
